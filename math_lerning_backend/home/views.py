from rest_framework.viewsets import ReadOnlyModelViewSet
from django.shortcuts import render
from . import models
from . import serializers
# Create your views here.


def custom_404(request, exception):
    return render(request, 'home/404.html')


class BasePictureViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return self.model.objects.filter(id=self.id)

    def get_serializer_context(self):
        return {'request': self.request}


class HomePageViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 1


class AddIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 2


class SubIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 3


class MulIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 4


class DivIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 5


class NextIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 6


class LoginIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 7


class PasswordIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 8


class LoginBtnIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 9


class EmailIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 10


class BgImageViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 11


class FormsBgViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 12


class TestIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 13


class CheackIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 14


class EasyIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 15


class MidIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 16


class HardIconViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 17
