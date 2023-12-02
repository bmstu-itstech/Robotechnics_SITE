from django.urls import include, path
from partners.router import router

urlpatterns = [
    path('', include(router.urls))
]
