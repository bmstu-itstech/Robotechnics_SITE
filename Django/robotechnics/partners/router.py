from partners.models import Partner  # noqa: F401
from partners.serializers import PartnerSerializer  # noqa: F401
from rest_framework.views import APIView
from rest_framework.response import Response


class PartnerViewSet(APIView):
    """!
    @brief API view для партнёров
    @details Возвращает json всех партнёров в порядке их создания
    """
    def get(self, request, format=None):
        partners = Partner.get_all_objects_by_id()
        serializer = PartnerSerializer(instance=partners, many=True)
        data = {
            'count': len(partners),
            'partners': serializer.data
        }
        return Response(data)
