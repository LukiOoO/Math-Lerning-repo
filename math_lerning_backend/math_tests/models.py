from django.db import models
from users.models import MathsiteUser
# Create your models here.


class TestModel(models.Model):
    correct = models.IntegerField()
    mistakes = models.IntegerField()
    user = models.ForeignKey(
        MathsiteUser, on_delete=models.CASCADE, related_query_name='mathsiteuser_ptr')
