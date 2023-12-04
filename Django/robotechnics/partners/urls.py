from django.urls import include, path
from partners.router import router

app_name = 'partners'
urlpatterns = [
    path('', include(router.urls))
]
