from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
import random
from .serializers import MathSerializer
from django.http import HttpResponse
# Create your views here.


class EasyAddingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 20)
            b = random.randint(1, 10)
            result = a + b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '+'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class EasySubtractionViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 20)
            b = random.randint(1, 10)
            result = a - b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '-'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class EasyMultiplicationViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 10)
            b = random.randint(1, 10)
            result = a * b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '*'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class EasyDividingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 20)
            b = random.randint(1, 10)
            while a % b != 0:
                a = random.randint(1, 20)
                b = random.randint(1, 10)
            result = a / b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '/'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class MediumAddingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 50)
            b = random.randint(1, 50)
            result = a + b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '+'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class MediumSubtractionViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 50)
            b = random.randint(1, 50)
            result = a - b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '-'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class MediumMultiplicationViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 50)
            b = random.randint(1, 50)
            result = a * b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '*'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class MediumDividingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 50)
            b = random.randint(1, 50)
            while a % b != 0:
                a = random.randint(1, 50)
                b = random.randint(1, 50)
            result = a / b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '/'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class HardAddingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            result = a + b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '+'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class HardSubtractionViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            result = a - b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '-'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class HardMultiplicationViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            result = a * b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '*'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)


class HardDividingViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def list(self, request):
        try:
            a = random.randint(1, 100)
            b = random.randint(1, 100)
            while a % b != 0:
                a = random.randint(1, 100)
                b = random.randint(1, 100)
            result = a / b
            return Response({'a': a, 'b': b, 'result': int(result),  'operator': '/'})
        except result.DoesNotExist:
            raise HttpResponse(status=204)
