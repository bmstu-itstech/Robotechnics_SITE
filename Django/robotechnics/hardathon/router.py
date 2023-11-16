from rest_framework import routers, viewsets
from hardathon.models import Hardathon, Project  # noqa: F401
from hardathon.serializers import HardathonSerializer, DetailProjectSerializer, ProjectSerializer  # noqa: F401
from hardathon.pagination import HardathonPagination, ProjectPagination  # noqa: F401


class HardathonViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для хардатонов
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    @param pagination_class Пагинация
    """
    queryset = Hardathon.get_all_objects_by_id()
    serializer_class = HardathonSerializer
    pagination_class = HardathonPagination


class DetailProjectViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для подробной информации о проекте
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Project.objects.all()
    serializer_class = DetailProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для проектов
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Project.get_all_objects_by_id()
    serializer_class = ProjectSerializer
    pagination_class = ProjectPagination


router = routers.DefaultRouter()
router.register(r'', HardathonViewSet)

router2 = routers.DefaultRouter()
router2.register(r'', DetailProjectViewSet)

router3 = routers.DefaultRouter()
router3.register(r'', ProjectViewSet)
