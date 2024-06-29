from events.models import ClassicEvent, Questionnaire
from rest_framework import serializers


class ClassicEventsSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для всех записей
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = ClassicEvent
        fields = ('id', 'title', 'photo')


class ClassicEventByIdSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = ClassicEvent
        fields = (
            'id', 'title', 'description',
            'photo', 'photo_album_url',
            'documents_url', 'location',
            'event_date', 'social_media_mention',
            'registration_link'
            )


class QuestionnaireByIdSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Questionnaire
        fields = (
            'id', 'searcher_fio', 'searcher_bmstu_group',
            'participants_count', 'required_competencies',
            'seacher_VK', 'additional',
            )


class QuestionnairesSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Questionnaire
        fields = ('id', 'searcher_fio', 'classic_event')
