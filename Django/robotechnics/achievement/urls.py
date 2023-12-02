from achievement.router import router  # noqa: F401
from django.urls import include, path

urlpatterns = [
    path('', include(router.urls))
]
