from rest_framework import serializers
from hardathon.models import Hardathon, Project  # noqa: F401


class HardathonSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Hardathon
        fields = ['name', 'image',]


class DetailProjectSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Project
        fields = ['name', 'description', 'competition_rules', 'implementation_scale', 'image',]
