from . import views
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register('userdata', views.MathUserViewSet, basename='mathuser')
router.register('show-user-score', views.ShowOneUserScore,
                basename='one user tests')


urlpatterns = router.urls
