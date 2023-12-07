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
        fields = ('title', 'photo',)


class HardathonByIdSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор для одной записи
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Hardathon
        fields = ('title', 'photo', 'photo_album_url',
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
        fields = ('title', 'description', 'competition_rules',
                  'implementation_scale', 'photo',)


class HardatonProjectsSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Project
        fields = ('title',)


class HardatonPartnersSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Partner
        fields = ('title', 'link', 'photo')
