from achievement.models import Achievement  # noqa: F401
from rest_framework import serializers


class AchievementSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Achievement
        fields = ('id', 'title', 'description', 'photo_album_url',
                  'link_to_media', 'photo')
