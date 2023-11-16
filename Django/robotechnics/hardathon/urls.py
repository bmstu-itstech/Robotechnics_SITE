from django.urls import path, include
from hardathon.router import router, router2  # noqa: F401


urlpatterns = [
    path('hardatons/', include(router.urls)),
    path('project/', include(router2.urls)),
]
