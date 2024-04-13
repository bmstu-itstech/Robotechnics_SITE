from director.router import DirectorViewSet
from django.urls import path

app_name = 'director'
urlpatterns = [
    path('', DirectorViewSet.as_view())
]
