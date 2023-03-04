from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase, APIClient
from users.models import MathsiteUser
from math_tests.models import TestModel
from math_tests.serializers import MathTestSerializer
import pytest
from django.contrib.auth import get_user_model


from django.test import RequestFactory
from rest_framework.response import Response
from math_tests.views import EasyMathTest, AdvancedMathTest, HardMathTest


class TestResultTestView(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = MathsiteUser.objects.create_user(
            nickname='TeStUsEr',
            email='testuser@example.com',
            password='testpass123'
        )
        self.client.force_authenticate(user=self.user)
        self.url = reverse('test-result-save-result')

    def test_save_result_success(self):
        data = {
            "correct": 1,
            "mistakes": 9,
            "user_id": self.user.id,
            "level": 'hard'

        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        math_test = TestModel.objects.get(user=self.user)
        self.assertEqual(math_test.correct, 1)
        self.assertEqual(math_test.mistakes, 9)

    def test_save_result_unauthenticated(self):
        self.client.force_authenticate(user=None)
        data = {
            "correct": 1,
            "mistakes": 9,
            "user_id": self.user.id,
            "level": 'hard'
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_save_result_missing_data(self):
        data = {
            "correct": 1,
            "mistakes": 9,
            "user_id": self.user.id,
            "level": 0
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


@pytest.mark.django_db
def test_testmodel_create():
    user = get_user_model().objects.create_user(
        nickname='testuser', email='testuser@example.com', password='password')
    test_model = TestModel.objects.create(
        level='advanced', correct=7, mistakes=3, user=user)
    assert test_model.level == 'advanced'
    assert test_model.correct == 7
    assert test_model.mistakes == 3
    assert test_model.user == user


class TestMathTestSerializer(APITestCase):
    def setUp(self):
        self.user = MathsiteUser.objects.create_user(
            nickname='test_user',
            email='test@example.com',
            password='testpass123',
        )
        self.data = {
            "correct": 8,
            "mistakes": 2,
            "user_id": self.user.id,
            "level": 'easy'
        }
        self.serializer = MathTestSerializer(data=self.data)

    def test_testLvlPoitons(self):
        serializer = MathTestSerializer()
        self.assertEqual(serializer.testLvlPoitons(8, 2, 6, 1, 3, 5), 6)

    def test_serializer_valid(self):
        self.assertTrue(self.serializer.is_valid())

    def test_serializer_create(self):
        self.serializer.is_valid()
        self.serializer.save()
        test = TestModel.objects.get(user=self.user, level='easy')
        self.assertEqual(test.correct, self.data['correct'])
        self.assertEqual(test.mistakes, self.data['mistakes'])
        self.assertEqual(test.user, self.user)
        self.assertEqual(test.level, self.data['level'])

    def test_user_score_updated(self):
        initial_score = self.user.score
        self.serializer.is_valid()
        self.serializer.save()
        self.user.refresh_from_db()
        score_difference = self.user.score - initial_score
        self.assertEqual(score_difference, 6)


class TestEasyMathTest:
    def test_list(self):
        # create request object
        factory = RequestFactory()
        request = factory.get('/get-es-test/')

        # create view object and call list method
        view = EasyMathTest()
        response = view.list(request)

        # assert that the response contains the expected data
        assert isinstance(response, Response)
        assert 'Your Test' in response.data
        assert isinstance(response.data['Your Test'], list)
        assert len(response.data['Your Test']) == 10


class TestAdvancedMathTest:
    def test_list(self):
        # create request object
        factory = RequestFactory()
        request = factory.get('/get-mid-test/')

        # create view object and call list method
        view = AdvancedMathTest()
        response = view.list(request)

        # assert that the response contains the expected data
        assert isinstance(response, Response)
        assert 'Your Test' in response.data
        assert isinstance(response.data['Your Test'], list)
        assert len(response.data['Your Test']) == 10


class TestHardMathTest:
    def test_list(self):
        # create request object
        factory = RequestFactory()
        request = factory.get('/get-hard-test/')

        # create view object and call list method
        view = HardMathTest()
        response = view.list(request)

        # assert that the response contains the expected data
        assert isinstance(response, Response)
        assert 'Your Test' in response.data
        assert isinstance(response.data['Your Test'], list)
        assert len(response.data['Your Test']) == 10
