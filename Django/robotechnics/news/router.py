from rest_framework import viewsets, routers
from news.models import News  # noqa: F401
from news.serializers import NewsSerializer  # noqa: F401


class NewsViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для новостей
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = News.get_all_objects_by_id()
    serializer_class = NewsSerializer


router = routers.DefaultRouter()
router.register(r'', NewsViewSet)
