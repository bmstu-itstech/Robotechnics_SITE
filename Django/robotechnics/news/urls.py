from django.urls import path
from news.views import NewsAPIView  # noqa: F401


urlpatterns = [
    path('api/v0/news', NewsAPIView.as_view()),
]
