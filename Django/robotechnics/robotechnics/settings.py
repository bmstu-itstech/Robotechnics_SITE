import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent
BASE_URL = 'http://127.0.0.1:8000/'


SECRET_KEY = os.environ.get('SECRET_KEY', 'summy-dummy key')

DEBUG = os.environ.get('DEBUG', 'True') == 'True'

ALLOWED_HOSTS = []

INTERNAL_IPS = [
    '127.0.0.1',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'events.apps.EventsConfig',
    'partners.apps.PartnersConfig',
    'hardathon.apps.HardathonConfig',
    'django_cleanup.apps.CleanupConfig',
    'sorl.thumbnail',
    'debug_toolbar',
    'achievement.apps.AchievementConfig',
    'news.apps.NewsConfig',
    'director.apps.DirectorConfig',
    'static_data.apps.StaticDataConfig',
    'rest_framework',
    'drf_yasg',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'robotechnics.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            'core/templates'
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'robotechnics.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    },
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.'
        'UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.'
        'MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.'
        'CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.'
        'NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'ru-ru'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


MEDIA_ROOT = BASE_DIR / 'media'
MEDIA_URL = '/media/'

STATIC_URL = '/static_dev/'
STATICFILES_DIRS = [
    BASE_DIR / 'static_dev',
]
STATIC_ROOT = BASE_DIR / 'static'


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)

CORS_EXPOSE_HEADERS = ['Content-Type', 'X-CSRFToken']
CORS_ALLOW_CREDENTIALS = True

Paginator_Size_Constants = {
    'questionnaires': 8,
    'hardaton_projects': 6,
    'news': 6,
    'partners': 4,
    'supervisors': 4,
    'classic_events': 6,
    'hardatons': 2,
    'hardaton_partners': 5,
}
