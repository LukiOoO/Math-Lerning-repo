from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='home/index.html')),
    path('home/', views.HomePageViewSet.as_view({'get': 'list'})),
    path('add-icon/', views.AddIconViewSet.as_view({'get': 'list'})),
    path('sub-icon/', views.SubIconViewSet.as_view({'get': 'list'})),
    path('mul-icon/', views.MulIconViewSet.as_view({'get': 'list'})),
    path('div-icon/', views.DivIconViewSet.as_view({'get': 'list'})),
    path('next-icon/', views.NextIconViewSet.as_view({'get': 'list'})),
    path('login-icon/', views.LoginIconViewSet.as_view({'get': 'list'})),
    path('password-icon/', views.PasswordIconViewSet.as_view({'get': 'list'})),
    path('loginbtn-icon/', views.LoginBtnIconViewSet.as_view({'get': 'list'})),
    path('email-icon/', views.EmailIconViewSet.as_view({'get': 'list'})),
    path('bg-image/', views.BgImageViewSet.as_view({'get': 'list'})),
    path('forms-bg-image/', views.FormsBgViewSet.as_view({'get': 'list'})),
    path('test-icon/', views.TestIconViewSet.as_view({'get': 'list'})),
    path('cheack-icon/', views.CheackIconViewSet.as_view({'get': 'list'})),
    path('easy-icon/', views.EasyIconViewSet.as_view({'get': 'list'})),
    path('mid-icon/', views.MidIconViewSet.as_view({'get': 'list'})),
    path('hard-icon/', views.HardIconViewSet.as_view({'get': 'list'})),
]
