from django.urls import path, include
from director.router import router


urlpatterns = [
    path('', include(router.urls))
]
