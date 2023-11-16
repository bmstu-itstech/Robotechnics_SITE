from events.models import ClassicEvent
from rest_framework import serializers


class ClassicEventsSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для всех записей
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = ClassicEvent
        fields = ('name', 'image')


class ClassicEventByIdSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = ClassicEvent
        fields = (
            'name', 'description',
            'image', 'link_to_photo_album',
            'link_to_the_docs', 'venue',
            'event_date', 'social_media_mention',
            'link_to_the_registr'
            )
