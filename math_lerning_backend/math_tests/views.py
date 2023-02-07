from rest_framework.response import Response
from math_exercises import views
import random
from django.http import HttpResponse
from math_exercises import serializers
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from .serializers import MathTestSerializer

# Create your views here.


class MathTest(viewsets.ReadOnlyModelViewSet):
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        try:
            test_list = []
            d = views.DividingViewSet()
            a = views.AddingViewSet()
            s = views.SubtractionViewSet()
            m = views.MultiplicationViewSet()
            for i in range(10):
                x = random.randint(0, 3)
                if x == 0:
                    serializer = serializers.MathSerializer(
                        m.list(request).data)
                elif x == 1:
                    serializer = serializers.MathSerializer(
                        a.list(request).data)
                elif x == 2:
                    serializer = serializers.MathSerializer(
                        s.list(request).data)
                elif x == 3:
                    serializer = serializers.MathSerializer(
                        d.list(request).data)
                test_list.append(serializer.data)
            return Response({'Your Test': test_list})
        except test_list.DoesNotExist:
            raise HttpResponse(status=204)


class TestResultView(CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    serializer_class = MathTestSerializer
    permission_classes = (IsAuthenticated,)

    @action(detail=False, methods=['POST'])
    def save_result(self, request, format=None):
        serializer = MathTestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)
