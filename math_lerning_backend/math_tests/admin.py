from django.contrib import admin
from .models import TestModel
# Register your models here.


@admin.register(TestModel)
class TestAdmin(admin.ModelAdmin):
    list_display = ('id', 'correct', 'mistakes', 'user')
