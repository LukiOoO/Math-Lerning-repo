from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib import messages
from . import models


class ScoreFilter(admin.SimpleListFilter):
    title = 'Score'
    parameter_name = 'Score'

    def lookups(self, request, model_admin):
        return [
            ('<100', 'Low'),
            ('>600', 'High')
        ]

    def queryset(self, request, queryset):
        if self.value() == '<100':
            return queryset.filter(score__lt=100)
        elif self.value() == '>600':
            return queryset.filter(score__gt=600)


@admin.register(models.MathsiteUser)
class MathsiteUserAdmin(UserAdmin):
    prepopulated_fields = {
        'slug': ['nickname']
    }
    actions = ['clear_score']
    list_display = ['email', 'nickname',
                    'score', 'rating', 'is_staff', 'admin']
    list_filter = [ScoreFilter, 'rating', 'staff', 'groups']
    list_per_page = 15
    list_editable = ['score', 'rating']
    ordering = ['email', 'nickname']
    search_fields = ['nickname__istartswith', 'email__istartswith']
    fieldsets = (
        (None, {'fields': ('email', 'nickname',  'slug', 'password')}),
        ('Permissions', {'fields': ('staff', 'groups')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'nickname', 'password1',
                       'password2', 'slug', 'score', 'rating', 'is_active', 'staff',
                       'admin', 'groups')}
         ),
    )
    search_fields = ('nickname', 'email')
    ordering = ('nickname',)
    filter_horizontal = ('groups',)

    @ admin.action(description='Clear Score')
    def clear_score(self, request, queryset):
        clear_user_score = queryset.update(score=0, rating='Beginer')
        self.message_user(
            request,
            f'{clear_user_score} user score is successfully clear',
            messages.SUCCESS
        )
