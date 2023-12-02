from django.urls import path, include
from achievement.router import router


urlpatterns = [
    path('', include(router.urls))
]
