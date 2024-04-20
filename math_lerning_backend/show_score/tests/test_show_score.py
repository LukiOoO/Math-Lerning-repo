from rest_framework.serializers import ModelSerializer
from users.models import MathsiteUser
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
import pytest
from show_score import serializers
from rest_framework.reverse import reverse


@pytest.mark.django_db
def test_show_best_score():
    client = APIClient()
    url = reverse('Show-best-score-list')
    response = client.get(url)

    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) <= 10


class TestScoreSerializer(TestCase):
    def setUp(self):
        self.user = MathsiteUser.objects.create(
            nickname='test_user', score=100, rating=5)
        self.serializer = serializers.ScoreSerializer(instance=self.user)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertCountEqual(data.keys(), ['nickname', 'score', 'rating'])

    def test_score_value(self):
        data = self.serializer.data
        self.assertEqual(data['score'], self.user.score)

    def test_nickname_value(self):
        data = self.serializer.data
        self.assertEqual(data['nickname'], self.user.nickname)

    def test_rating_value(self):
        data = self.serializer.data
        self.assertEqual(data['rating'], self.user.rating)
