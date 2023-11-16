from rest_framework import routers, viewsets
from hardathon.models import Hardathon  # noqa: F401
from hardathon.serializers import HardathonSerializer  # noqa: F401
from hardathon.pagination import HardathonPagination  # noqa: F401


class HardathonViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для хардатонов
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Hardathon.get_all_objects_by_id()
    serializer_class = HardathonSerializer
    pagination_class = HardathonPagination


router = routers.DefaultRouter()
router.register(r'', HardathonViewSet)
