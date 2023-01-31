from django.urls import path
from . import views

urlpatterns = [
    path('', views.math_test),
]
