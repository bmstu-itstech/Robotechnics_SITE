from rest_framework import viewsets, routers
from news.models import News
from news.pagination import NewsPagination
from news.serializers import NewsSerializer


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
