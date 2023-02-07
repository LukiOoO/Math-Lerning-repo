from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('', views.ShowBestScorsViewSet,
                basename='Show-best-score')

urlpatterns = router.urls
