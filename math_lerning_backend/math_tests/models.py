from django.db import models
from users.models import MathsiteUser
# Create your models here.


class TestModel(models.Model):
    LEVEL_CHOICES = [
        ('easy', 'Easy'),
        ('advanced', 'Advanced'),
        ('hard', 'Hard')
    ]
    level = models.CharField(
        max_length=10, choices=LEVEL_CHOICES, default='easy')

    correct = models.IntegerField()
    mistakes = models.IntegerField()
    user = models.ForeignKey(
        MathsiteUser, on_delete=models.CASCADE, related_query_name='mathsiteuser_ptr')
