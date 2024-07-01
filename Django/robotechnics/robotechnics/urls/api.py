from django.urls import include, path

urlpatterns = [
    path('news/', include('news.urls')),
    path('achievements/', include('achievement.urls')),
    path('partners/', include('partners.urls')),
    path('', include('hardathon.urls')),
    path('', include('events.urls')),

]
