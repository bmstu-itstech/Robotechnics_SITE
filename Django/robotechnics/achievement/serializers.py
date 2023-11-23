from rest_framework import serializers
from achievement.models import Achievement  # noqa: F401


class AchievementSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Achievement
        fields = ['title', 'description', 'link_to_photo_album', 'link_to_media', 'image']
