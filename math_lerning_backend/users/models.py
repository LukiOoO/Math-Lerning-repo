from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password
from django.core.validators import MinValueValidator
from django.contrib.auth.models import Group


# from django.contrib.auth


class MathsiteUserManager(BaseUserManager):
    def create_user(self, email, nickname, password):
        if not email:
            raise ValueError('Users must have an email address')
        if not nickname:
            raise ValueError('Users must have a nickname')
        user = self.model(
            email=self.normalize_email(email),
            nickname=nickname,
            password=password)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, nickname, password):
        user = self.create_user(
            email=email,
            nickname=nickname,
            password=password)
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user


class MathsiteUser(AbstractBaseUser):
    Beginer = 'B'
    Advanced = 'A'
    Master = 'M'
    GrandMaster = 'GM'

    RANKS_CHOICES = [(Beginer, 'Beginer'),    (Advanced, 'Advanced'),
                     (Master, 'Master'),    (GrandMaster, 'GrandMaster'),]

    email = models.EmailField(
        unique=True, max_length=255, verbose_name='email address')
    nickname = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    slug = models.SlugField()
    score = models.IntegerField(validators=[MinValueValidator(0)], default=0)
    rating = models.CharField(
        max_length=255, choices=RANKS_CHOICES, default=Beginer)
    is_active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        Group, related_name='mathsite_users', blank=True)

    def __str__(self):
        return f'{self.nickname}'

    def save(self, *args, **kwargs):
        self.slug = self.nickname
        password = make_password(self.password)
        if self.score < 0:
            self.score = 0
        if self.score >= 0 and self.score < 100:
            self.rating = self.Beginer
        elif self.score >= 50 and self.score < 200:
            self.rating = self.Advanced
        elif self.score >= 100 and self.score < 400:
            self.rating = self.Master
        else:
            self.rating = self.GrandMaster

        super().save(*args, **kwargs)

    class Meta:
        ordering = ['email', 'nickname', 'score', 'rating']

    USERNAME_FIELD = 'nickname'
    REQUIRED_FIELDS = ['email', 'password']

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    objects = MathsiteUserManager()
