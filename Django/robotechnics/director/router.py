from rest_framework import routers, viewsets
from director.models import Director
from director.serializers import DirectorSerializer
from director.pagination import DirectorPagination


class DirectorViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для руководителей
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Director.get_all_objects_by_id()
    serializer_class = DirectorSerializer
    pagination_class = DirectorPagination


router = routers.DefaultRouter()
router.register(r'', DirectorViewSet)
