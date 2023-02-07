from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('adding', views.AddingViewSet, basename='adding')
router.register('subtraction', views.SubtractionViewSet,
                basename='subtraction')
router.register('multiplication', views.MultiplicationViewSet,
                basename='multiplication')
router.register('dividing', views.DividingViewSet, basename='dividing')

urlpatterns = router.urls
