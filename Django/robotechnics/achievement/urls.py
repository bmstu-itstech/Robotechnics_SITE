from achievement.router import router  # noqa: F401
from django.urls import include, path

app_name = 'achievement'
urlpatterns = [
    path('', include(router.urls))
]
