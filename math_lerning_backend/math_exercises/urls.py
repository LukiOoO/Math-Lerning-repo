from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('es-adding', views.EasyAddingViewSet, basename='es-adding')
router.register('es-subtraction', views.EasySubtractionViewSet,
                basename='es-subtraction')
router.register('es-multiplication', views.EasyMultiplicationViewSet,
                basename='es-multiplication')
router.register('es-dividing', views.EasyDividingViewSet,
                basename='es-dividing')
router.register('mid-adding', views.MediumAddingViewSet, basename='mid-adding')
router.register('mid-subtraction', views.MediumSubtractionViewSet,
                basename='mid-subtraction')
router.register('mid-multiplication', views.MediumMultiplicationViewSet,
                basename='mid-multiplication')
router.register('mid-dividing', views.MediumDividingViewSet,
                basename='mid-dividing')
router.register('hard-adding', views.HardAddingViewSet, basename='hard-adding')
router.register('hard-subtraction', views.HardSubtractionViewSet,
                basename='hard-subtraction')
router.register('hard-multiplication', views.HardMultiplicationViewSet,
                basename='hard-multiplication')
router.register('hard-dividing', views.HardDividingViewSet,
                basename='hard-dividing')

urlpatterns = router.urls
