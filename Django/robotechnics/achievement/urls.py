from achievement.router import AchievementViewSet
from django.urls import path

app_name = 'achievement'
urlpatterns = [
    path('', AchievementViewSet.as_view())
]
