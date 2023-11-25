from django.shortcuts import get_object_or_404
from events.models import ClassicEvent, Questionnaire
from events.pagination import EventsPagination
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
    pagination_class = EventsPagination

    def retrieve(self, request, pk=None):
        classic_event = get_object_or_404(self.queryset, pk=pk)
        serializer = ClassicEventByIdSerializer(classic_event)
        return Response(serializer.data)


class QuestionnairesViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для всех анкет
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnairesSerializer
    pagination_class = EventsPagination


class QuestionnaireByIdViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для всех анкет
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnaireByIdSerializer
    pagination_class = EventsPagination

    def retrieve(self, request, pk=None):
        questionnaire = get_object_or_404(self.queryset, pk=pk)
        serializer = QuestionnaireByIdSerializer(questionnaire)
        return Response(serializer.data)


router = routers.DefaultRouter()
router.register(r'', ClassicEventViewSet)
