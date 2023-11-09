from django.urls import path, include
from partners.router import router  # noqa: F401


urlpatterns = [
    path('partners', include(router.urls))
]
