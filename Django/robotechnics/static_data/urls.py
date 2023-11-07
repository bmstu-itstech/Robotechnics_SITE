from django.urls import path, include
from static_data.router import router  # noqa: F401


urlpatterns = [
    path('api/v0/static_data', include(router.urls))
]
