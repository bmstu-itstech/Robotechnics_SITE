from partners.models import Partner  # noqa: F401
from rest_framework import serializers


class PartnerSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Partner
        fields = ('id', 'title', 'link', 'photo')
