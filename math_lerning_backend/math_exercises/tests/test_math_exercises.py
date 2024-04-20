import random
from rest_framework.test import APIRequestFactory
from rest_framework.response import Response
from math_exercises.views import MathBaseViewSet
import pytest
from unittest.mock import Mock

from math_exercises.views import MathBaseViewSet
from math_exercises.serializers import MathSerializer


@pytest.fixture
def view():
    return MathBaseViewSet(a_max=10, b_max=20)


def test_list_with_valid_values(view):
    view.get_values = Mock(return_value=(2, 3))
    view.calculate = Mock(return_value=5)
    view.get_operator = Mock(return_value='+')
    request = Mock()

    response = view.list(request)

    assert response.status_code == 200
    assert response.data == {'a': 2, 'b': 3, 'result': 5, 'operator': '+'}


def test_filter_values(view):
    a, b = view.filter_values(15, 10)

    assert a == 15
    assert b == 10


def test_math_serializer():
    serializer = MathSerializer(
        data={'a': 5, 'b': 10, 'operator': '+', 'result': 15})
    assert serializer.is_valid()

    data = serializer.validated_data
    assert data['a'] == 5
    assert data['b'] == 10
    assert data['operator'] == '+'
    assert data['result'] == 15
