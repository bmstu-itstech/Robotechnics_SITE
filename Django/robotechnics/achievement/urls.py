from django.urls import path, include
from achievement.router import router  # noqa: F401


urlpatterns = [
    path('api/v0/achievements', include(router.urls))
]
