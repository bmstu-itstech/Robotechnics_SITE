from news.models import News  # noqa: F401
from news.pagination import NewsPagination  # noqa: F401
from news.serializers import NewsSerializer  # noqa: F401
from rest_framework import routers, viewsets


class NewsViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для новостей
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = News.get_all_objects_by_id()
    serializer_class = NewsSerializer
    pagination_class = NewsPagination


router = routers.DefaultRouter()
router.register(r'', NewsViewSet)
