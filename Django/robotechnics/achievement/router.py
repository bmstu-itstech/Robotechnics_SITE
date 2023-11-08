from rest_framework import routers, viewsets
from achievement.models import Achievement  # noqa: F401
from achievement.serializers import AchievementSerializer  # noqa: F401


class AchievementViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для достижений
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Achievement.get_all_objects_by_id()
    serializer_class = AchievementSerializer


router = routers.DefaultRouter()
router.register(r'', AchievementViewSet)
