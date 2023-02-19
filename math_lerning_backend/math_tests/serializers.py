from rest_framework import serializers
from .models import TestModel
from users.models import MathsiteUser


class MathTestSerializer(serializers.Serializer):
    correct = serializers.IntegerField()
    mistakes = serializers.IntegerField()
    user_id = serializers.CharField()
    level = serializers.ChoiceField(['easy',
                                     'advanced',
                                     'hard'])

    def testLvlPoitons(self, correct, mistake, points_a, multiplier, points_b, points_c):
        score = 0
        if correct >= points_a:
            score = (correct - mistake) * multiplier
            return score
        elif correct <= points_b:
            score -= points_c
            return score
        else:
            score = correct - mistake
            return score

    def create(self, validated_data):
        level = validated_data.get('level')
        correct = validated_data.get('correct')
        mistake = validated_data.get('mistakes')

        if level == 'easy':
            score = self.testLvlPoitons(correct, mistake, 6, 1, 3, 5)
        elif level == 'advanced':
            score = self.testLvlPoitons(correct, mistake, 8, 5, 5, 40)
        elif level == 'hard':
            score = self.testLvlPoitons(correct, mistake, 9, 10, 7, 100)
        user = MathsiteUser.objects.get(id=validated_data.get('user_id'))
        user.score += score
        user.save()
        return TestModel.objects.create(**validated_data)
