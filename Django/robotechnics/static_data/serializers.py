from rest_framework import serializers
from static_data.models import StaticData  # noqa: F401


class StaticDataSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = StaticData
        fields = ['address', 'phone', 'email', 'link_to_driving_scheme', 'link_to_vk', 'link_to_telegram']
