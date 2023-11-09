from django.urls import path, include
from news.router import router  # noqa: F401


urlpatterns = [
    path('news', include(router.urls))
]
