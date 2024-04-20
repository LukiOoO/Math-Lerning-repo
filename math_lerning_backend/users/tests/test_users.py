from rest_framework import permissions
from users.serializers import MathUserSerializer, UserCreateSerializer, UserSerializer
from django.contrib.auth import get_user_model
from users.views import MathUserViewSet
from django.test import RequestFactory
from django.contrib.auth.models import User
import pytest
from django.test import TestCase
from rest_framework.test import APIRequestFactory
from users.views import ShowOneUserScore
from users.models import MathsiteUser
from rest_framework.test import APIRequestFactory
from users.permission import IsProfileOwner


class TestShowOneUserScoreTestCase(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = MathsiteUser.objects.create_user(
            nickname='testuser', email='testuser@example.com', password='password'
        )
        self.client.force_login(self.user)

    def test_get_queryset(self):
        view = ShowOneUserScore.as_view({'get': 'list'})
        request = self.factory.get('/mathuser/show-user-score/')
        request.user = self.user

        response = view(request=request)
        queryset = response.data

        self.assertEqual(len(queryset), 0)

    def test_get_serializer_context(self):
        factory = APIRequestFactory()
        request = factory.get('/mathuser/userdata/me/')
        request.user = self.user
        view = ShowOneUserScore()
        view.request = request
        context = view.get_serializer_context()

        self.assertEqual(context['request'], request)


@pytest.fixture
def math_user_view_set():
    return MathUserViewSet()


@pytest.fixture
def factory():
    return RequestFactory()


@pytest.mark.django_db
def test_math_user_view_set_me_get(math_user_view_set, factory):
    user = MathsiteUser.objects.create_user(
        nickname='testuser', email="test@mail.com", password='testpass')
    request = factory.get('/mathuser/userdata/me/')
    request.user = user
    response = math_user_view_set.me(request)
    assert response.status_code == 200
    assert response.data['nickname'] == 'testuser'


User = get_user_model()


@pytest.fixture
def user():
    return User.objects.create_user(
        nickname='testuser',
        email='testuser@example.com',
        password='testpass123'
    )


@pytest.mark.django_db
def test_math_user_serializer(user):
    serializer = MathUserSerializer(instance=user)
    expected_fields = {'id', 'nickname', 'email', 'score', 'rating'}
    assert set(serializer.data.keys()) == expected_fields
    assert serializer.data['id'] == user.id
    assert serializer.data['nickname'] == user.nickname
    assert serializer.data['email'] == user.email
    assert serializer.data['score'] == user.score
    assert serializer.data['rating'] == user.rating


@pytest.mark.django_db
def test_user_create_serializer():
    data = {
        'nickname': 'testuser',
        'email': 'tesasastuser@exampasasle.com',
        'password': 'testpass123'
    }
    serializer = UserCreateSerializer(data=data)
    assert serializer.is_valid()
    assert set(serializer.validated_data.keys()) == {
        'nickname', 'email', 'password'}


@pytest.mark.django_db
def test_user_serializer(user):
    serializer = UserSerializer(instance=user)
    expected_fields = {'id', 'nickname',
                       'email', 'password', 'score', 'rating'}
    assert set(serializer.data.keys()) == expected_fields
    assert serializer.data['id'] == user.id
    assert serializer.data['nickname'] == user.nickname
    assert serializer.data['email'] == user.email
    assert serializer.data['password'] == user.password
    assert serializer.data['score'] == user.score
    assert serializer.data['rating'] == user.rating
