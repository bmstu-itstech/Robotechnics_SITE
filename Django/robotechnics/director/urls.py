from django.urls import path, include
from director.router import router  # noqa: F401


urlpatterns = [
    path('supervisors', include(router.urls))
]
