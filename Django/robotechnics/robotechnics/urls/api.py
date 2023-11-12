from django.urls import include, path

urlpatterns = [
    path('classic_events/', include('events.urls')),
]
