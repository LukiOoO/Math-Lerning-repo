import logging
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from math_exercises.views import AddingViewSet
from math_exercises.serializers import MathSerializer
from users.models import MathsiteUser
from django.conf.urls.static import static
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
# Create your views here.


def custom_404(request, exception):
    return render(request, 'home/404.html')


class HomePageViewSet(ReadOnlyModelViewSet):
    # serializer_class = MathSerializer

    # def list(self, request):
    #     adding_viewset = AddingViewSet()
    #     adding_instance = adding_viewset.list(request)
    #     adding_data = adding_instance.data
    #     serializer = MathSerializer(data=adding_data)
    #     if serializer.is_valid():
    #         serialized_data = serializer.data
    #         return Response({'Adding': serialized_data})
    #     return Response({'error': 'Invalid data'})

    permission_classes = (IsAuthenticated,)
