from rest_framework import serializers


class MathSerializer(serializers.Serializer):
    a = serializers.IntegerField()
    b = serializers.IntegerField()
    operator = serializers.CharField()
    result = serializers.IntegerField()
