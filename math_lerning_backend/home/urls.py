from django.urls import path
from django.views.generic import TemplateView
from .views import HomePageViewSet, AddIconViewSet, SubIconViewSet, DivIconViewSet, MulIconViewSet, NextIconViewSet, LoginIconViewSet, PasswordIconViewSet, LoginBtnIconViewSet


urlpatterns = [

    path('', TemplateView.as_view(template_name='home/index.html')),
    path('home/', HomePageViewSet.as_view({'get': 'list'})),
    path('add-icon/', AddIconViewSet.as_view({'get': 'list'})),
    path('sub-icon/', SubIconViewSet.as_view({'get': 'list'})),
    path('mul-icon/', MulIconViewSet.as_view({'get': 'list'})),
    path('div-icon/', DivIconViewSet.as_view({'get': 'list'})),
    path('next-icon/', NextIconViewSet.as_view({'get': 'list'})),
    path('login-icon/', LoginIconViewSet.as_view({'get': 'list'})),
    path('password-icon/', PasswordIconViewSet.as_view({'get': 'list'})),
    path('loginbtn-icon/', LoginBtnIconViewSet.as_view({'get': 'list'})),


]
