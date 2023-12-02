from django.urls import include, path
from news.router import router  # noqa: F401

urlpatterns = [
    path('', include(router.urls))
]
