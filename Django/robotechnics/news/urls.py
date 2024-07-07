from django.urls import path
from news.router import NewsViewSet

app_name = 'news'
urlpatterns = [
    path('', NewsViewSet.as_view())
]
