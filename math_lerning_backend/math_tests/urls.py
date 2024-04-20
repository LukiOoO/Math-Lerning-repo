from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('get-es-test', views.EasyMathTest,
                basename='get-es-test')
router.register('get-mid-test', views.AdvancedMathTest,
                basename='get-mid-test')
router.register('get-hard-test', views.HardMathTest,
                basename='get-hard-test')
router.register('test-result', views.TestResultView, basename='test-result')

urlpatterns = router.urls
