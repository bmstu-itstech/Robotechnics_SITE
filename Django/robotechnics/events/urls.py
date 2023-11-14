from django.urls import include, path
from events.router import router

app_name = 'events'
urlpatterns = [
    path('', include(router.urls))
]
