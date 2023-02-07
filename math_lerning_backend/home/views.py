from rest_framework.viewsets import ReadOnlyModelViewSet
from django.conf.urls.static import static
from django.shortcuts import render
from . import models
from . import serializers
# Create your views here.


def custom_404(request, exception):
    return render(request, 'home/404.html')


class HomePageViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return models.Pictures.objects.filter(id=1)

    def get_serializer_context(self):
        return {'request': self.request}
