from rest_framework import serializers
from .models import TestModel
from users.models import MathsiteUser


class MathTestSerializer(serializers.Serializer):
    correct = serializers.IntegerField()
    mistakes = serializers.IntegerField()
    user_id = serializers.CharField()

    def create(self, validated_data):
        correct = validated_data.get('correct')
        mistake = validated_data.get('mistakes')
        score = 0
        if correct >= 8:
            score = (correct - mistake) * 10
        elif correct <= 3:
            score -= 30
        else:
            score = correct - mistake
        user = MathsiteUser.objects.get(id=validated_data.get('user_id'))
        user.score += score
        user.save()
        return TestModel.objects.create(**validated_data)
