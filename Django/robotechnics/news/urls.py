from django.urls import include, path
from news.router import router  # noqa: F401

app_name = 'news'
urlpatterns = [
    path('', include(router.urls))
]
