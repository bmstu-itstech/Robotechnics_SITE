from django.urls import path, include
from news.router import router


urlpatterns = [
    path('', include(router.urls))
]
