from django.urls import include, path
from events.router import router_classic_events, router_questionnaires

app_name = 'events'
urlpatterns = [
    path('classic_events/', include(router_classic_events.urls)),
    path('questionnaire/', include(router_questionnaires.urls)),
]
