from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from users.models import MathsiteUser
from .serializers import MathUserSerializer
from rest_framework.response import Response
from django.http import HttpResponseForbidden
from rest_framework import permissions
from django.http import JsonResponse
import jwt
from django.conf import settings
from rest_framework.parsers import JSONParser
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.urls import reverse
from rest_framework.decorators import action, permission_classes
from django.shortcuts import get_object_or_404
from .permission import IsProfileOwner
from django.http import Http404


# Create your views here.


class MathUserViewSet(CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = MathsiteUser.objects.all()
    serializer_class = MathUserSerializer
    permission_classes = [IsProfileOwner]

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        if permission_classes:
            try:
                user = MathsiteUser.objects.get(id=request.user.id)
            except MathsiteUser.DoesNotExist:
                raise Http404

            if request.method == 'GET':
                serializer = MathUserSerializer(user)
                return Response(serializer.data)
            elif request.method == 'PUT':
                serializer = MathUserSerializer(user, data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response(serializer.data)
