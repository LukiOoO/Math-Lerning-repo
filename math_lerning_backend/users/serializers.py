from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import serializers
from users.models import MathsiteUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model


class MathUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MathsiteUser
        fields = ['id', 'nickname', 'email', 'score', 'rating']
        read_only_fields = ['score', 'rating']


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'nickname', 'password',
                  'email']


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        model = MathsiteUser
        fields = ['id', 'nickname', 'email', 'password', 'score', 'rating']
        read_only_fields = ['score', 'rating']
