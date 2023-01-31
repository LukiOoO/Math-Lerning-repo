from django.urls import path, include
from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'adding', views.AddingViewSet, basename='adding')
router.register(r'subtraction', views.SubtractionViewSet,
                basename='subtraction')
router.register(r'multiplication', views.MultiplicationViewSet,
                basename='multiplication')
router.register(r'dividing', views.DividingViewSet, basename='dividing')

urlpatterns = router.urls
