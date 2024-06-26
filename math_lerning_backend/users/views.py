from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet, ReadOnlyModelViewSet
from users.models import MathsiteUser
from .serializers import MathUserSerializer
from rest_framework.response import Response
from rest_framework.decorators import action, permission_classes
from django.http import Http404
from math_tests.models import TestModel
from math_tests.serializers import MathTestSerializer
from .models import MathsiteUser
from .permission import IsProfileOwner


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


class ShowOneUserScore(ReadOnlyModelViewSet):
    serializer_class = MathTestSerializer
    permission_classes = [IsProfileOwner]

    def get_queryset(self):
        user_id = self.request.user.id
        return TestModel.objects.filter(user_id=user_id).order_by('-id').all()[:10]

    def get_serializer_context(self):
        return {'request': self.request}
