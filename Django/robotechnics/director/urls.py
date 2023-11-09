from django.urls import path, include
from director.router import router  # noqa: F401


urlpatterns = [
    path('', include(router.urls))
]
