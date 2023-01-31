from .serializers import ScoreSerializer
from users.models import MathsiteUser
from rest_framework.viewsets import ReadOnlyModelViewSet
# Create your views here.


class ShowBestScorsViewSet(ReadOnlyModelViewSet):
    serializer_class = ScoreSerializer

    def get_queryset(self):
        return MathsiteUser.objects.order_by('-score').all()[:10]

    def get_serializer_context(self):
        return {'request': self.request}
