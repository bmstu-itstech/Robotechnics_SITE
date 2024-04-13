from django.urls import path
from hardathon.router import (HardathonViewSet,
                              HardatonProjectsViewSet,
                              HardatonPartnersViewSet)


app_name = 'hardathon'
urlpatterns = [
    path('hardatons/', HardathonViewSet.as_view()),
    path('hardatons/<int:pk>/', HardathonViewSet.as_view()),
    path('project/<int:pk>/', HardatonProjectsViewSet.as_view()),
    path('projects/', HardatonProjectsViewSet.as_view()),
    path('get_event_partners/<int:pk>/', HardatonPartnersViewSet.as_view()),
]
