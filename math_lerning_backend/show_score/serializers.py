from rest_framework.serializers import ModelSerializer
from users.models import MathsiteUser


class ScoreSerializer(ModelSerializer):
    class Meta:
        model = MathsiteUser
        fields = ['nickname', 'score', 'rating']
