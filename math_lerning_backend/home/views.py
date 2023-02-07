import logging
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from math_exercises.views import AddingViewSet
from math_exercises.serializers import MathSerializer
from users.models import MathsiteUser
from django.conf.urls.static import static
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from . import models
from . import serializers
from django.http import Http404
# Create your views here.


def custom_404(request, exception):
    return render(request, 'home/404.html')


class HomePageViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=1)

    def get_serializer_context(self):
        return {'request': self.request}

    # permission_classes = (IsAuthenticated,)
