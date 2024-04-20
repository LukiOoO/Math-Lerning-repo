from .common import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-t*5$9h-*0%fpsacq)s-@4sj27%#f#125-l*a@p&u26b9bg14hp'

# ALLOWED_HOSTS = ["*"]
# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME':  'math_learning',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'haslo123',
    }
}
