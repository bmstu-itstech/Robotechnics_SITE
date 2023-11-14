from rest_framework import serializers
from partners.models import Partner  # noqa: F401


class PartnerSerializer(serializers.ModelSerializer):
    """!
    @brief Сериализатор
    @details Нужен для преобразовывания сложных типов данных в json
    """
    class Meta:
        model = Partner
        fields = ['name', 'link_to_the_site', 'image']
