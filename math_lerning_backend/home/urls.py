from django.urls import path
from django.views.generic import TemplateView
from .views import HomePageViewSet


urlpatterns = [

    path('', TemplateView.as_view(template_name='home/index.html')),
    path('home/', HomePageViewSet.as_view({'get': 'list'})),

]
