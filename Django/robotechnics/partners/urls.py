from django.urls import path, include
from partners.router import router


urlpatterns = [
    path('', include(router.urls))
]
