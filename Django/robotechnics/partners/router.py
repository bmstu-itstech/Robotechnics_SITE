from partners.models import Partner  # noqa: F401
from partners.pagination import PartnersPagination  # noqa: F401
from partners.serializers import PartnerSerializer  # noqa: F401
from rest_framework import routers, viewsets


class PartnerViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для партнёров
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Partner.get_all_objects_by_id()
    serializer_class = PartnerSerializer
    pagination_class = PartnersPagination


router = routers.DefaultRouter()
router.register(r'', PartnerViewSet)
