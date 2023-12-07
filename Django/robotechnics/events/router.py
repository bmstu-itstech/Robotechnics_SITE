from django.shortcuts import get_object_or_404
from events.models import ClassicEvent, Questionnaire
from events.pagination import ClassicEventPagination, QuestionnairePagination
from events.serializers import (ClassicEventByIdSerializer,
                                ClassicEventsSerializer,
                                QuestionnaireByIdSerializer,
                                QuestionnairesSerializer)
from rest_framework import routers, viewsets
from rest_framework.response import Response


class ClassicEventViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для классических мероприятий
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = ClassicEvent.objects.all()
    serializer_class = ClassicEventsSerializer
    pagination_class = ClassicEventPagination

    def retrieve(self, request, pk=None):
        classic_event = get_object_or_404(self.queryset, pk=pk)
        serializer = ClassicEventByIdSerializer(classic_event)
        return Response(serializer.data)


class QuestionnaireViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для всех анкет
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnairesSerializer
    pagination_class = QuestionnairePagination

    def retrieve(self, request, pk=None):
        questionnaire = get_object_or_404(self.queryset, pk=pk)
        serializer = QuestionnaireByIdSerializer(questionnaire)
        return Response(serializer.data)


router_classic_events = routers.DefaultRouter()
router_classic_events.register(r'', ClassicEventViewSet)

router_questionnaires = routers.DefaultRouter()
router_questionnaires.register(r'', QuestionnaireViewSet)
