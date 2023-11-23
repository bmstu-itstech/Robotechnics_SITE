from events.models import ClassicEvent
from rest_framework import serializers


class ClassicEventsSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для всех записей
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = ClassicEvent
        fields = ('title', 'image')


class ClassicEventByIdSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = ClassicEvent
        fields = (
            'title', 'description',
            'image', 'photo_album_url',
            'documents_url', 'location',
            'event_date', 'social_media_mention',
            'registration_link'
            )
