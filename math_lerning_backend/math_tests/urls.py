from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('get-test', views.MathTest,
                basename='get-test')
router.register('test-result', views.TestResultView, basename='test-result')

urlpatterns = router.urls
