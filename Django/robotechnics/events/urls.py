from django.urls import include, path
from events.router import ClassicEventViewSet, QuestionnaireViewSet

app_name = 'events'
urlpatterns = [
    path('classic_events/<int:pk>/', ClassicEventViewSet.as_view()),
    path('classic_events/', ClassicEventViewSet.as_view()),
    path('questionnaire/<int:pk>/', QuestionnaireViewSet.as_view()),
    path('questionnaire/', QuestionnaireViewSet.as_view()),
]
