from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
import random
from .serializers import MathSerializer
from django.http import HttpResponse
# Create your views here.


class AddingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            result = a + b
            return Response({'a': a, 'b': b, 'result': int(result)})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class SubtractionViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            result = a - b
            return Response({'a': a, 'b': b, 'result': int(result)})

        except result.DoesNotExist:
            raise HttpResponse(status=204)


class MultiplicationViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            result = a * b
            return Response({'a': a, 'b': b, 'result': int(result)})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class DividingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            while a % b != 0:
                a = random.randint(1, 100)
                b = random.randint(1, 100)
            result = a / b
            return Response({'a': a, 'b': b, 'result': int(result)})
        except result.DoesNotExist:
            raise HttpResponse(status=204)
