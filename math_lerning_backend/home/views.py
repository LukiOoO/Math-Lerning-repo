from rest_framework.viewsets import ReadOnlyModelViewSet
from django.conf.urls.static import static
from django.shortcuts import render
from . import models
from . import serializers
from rest_framework.decorators import api_view
from django.http import FileResponse
# Create your views here.


def custom_404(request, exception):
    return render(request, 'home/404.html')


class HomePageViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=1)

    def get_serializer_context(self):
        return {'request': self.request}


class AddIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=2)

    def get_serializer_context(self):
        return {'request': self.request}


class SubIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=3)

    def get_serializer_context(self):
        return {'request': self.request}


class MulIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=4)

    def get_serializer_context(self):
        return {'request': self.request}


class DivIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=5)

    def get_serializer_context(self):
        return {'request': self.request}


class NextIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=6)

    def get_serializer_context(self):
        return {'request': self.request}


class LoginIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=7)

    def get_serializer_context(self):
        return {'request': self.request}


class PasswordIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=8)

    def get_serializer_context(self):
        return {'request': self.request}


class LoginBtnIconViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=9)

    def get_serializer_context(self):
        return {'request': self.request}
