from django.urls import path
from hardathon.router import (HardathonViewSet,
                              HardathonProjectsViewSet,
                              HardathonPartnersViewSet)


app_name = 'hardathon'
urlpatterns = [
    path('hardathons/', HardathonViewSet.as_view()),
    path('hardathons/<int:pk>/', HardathonViewSet.as_view()),
    path('project/<int:pk>/', HardathonProjectsViewSet.as_view()),
    path('projects/', HardathonProjectsViewSet.as_view()),
    path('get_event_partners/<int:pk>/', HardathonPartnersViewSet.as_view()),
]
