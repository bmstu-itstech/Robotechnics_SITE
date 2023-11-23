from rest_framework import serializers
from partners.models import Partner  # noqa: F401
from hardathon.models import Hardathon, Project  # noqa: F401


class HardathonSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Hardathon
        fields = ['title', 'image',]


class DetailProjectSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Project
        fields = ['title', 'description', 'competition_rules', 'implementation_scale', 'image',]


class ProjectSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Project
        fields = ['name',]


class HardatonPartnersSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Partner
        fields = ['title', 'link', 'image']
