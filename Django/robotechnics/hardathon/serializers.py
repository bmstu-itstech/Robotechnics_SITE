from hardathon.models import Hardathon, Project
from partners.models import Partner
from rest_framework import serializers


class HardathonSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Hardathon
        fields = ('id', 'title', 'photo',)


class HardathonByIdSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Hardathon
        fields = ('id', 'title', 'photo', 'photo_album_url',
                  'documents_url', 'location',
                  'date_for_accepting_applications',
                  'closing_date_for_applications',
                  'summing_up_date', 'main_organizer_photo',
                  'main_organizer_word', 'competition_task',)


class DetailProjectSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'competition_rules',
                  'implementation_scale', 'photo',)


class HardathonProjectsSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Project
        fields = ('id', 'title',)


class HardathonPartnersSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Partner
        fields = ('id', 'title', 'link', 'photo')
