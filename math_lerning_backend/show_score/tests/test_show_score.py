import pytest

from rest_framework.test import APIRequestFactory

from show_score.views import ShowBestScorsViewSet
from users.models import MathsiteUser


@pytest.mark.django_db
def test_get_serializer_context():
    # Arrange
    factory = APIRequestFactory()
    request = factory.get("/")
    view = ShowBestScorsViewSet()
    view.request = request

    # Act
    context = view.get_serializer_context()

    # Assert
    assert "request" in context
    assert context["request"] == request
