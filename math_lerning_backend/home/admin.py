from django.contrib import admin
from . import models
# Register your models here.


@admin.register(models.Pictures)
class PictureAdmin(admin.ModelAdmin):
    picture = models.Pictures()
