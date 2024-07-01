from achievement.models import Achievement  # noqa: F401
from achievement.serializers import AchievementSerializer  # noqa: F401
from rest_framework.views import APIView
from rest_framework.response import Response


class AchievementViewSet(APIView):
    """!
    @brief API view для достижений
    @details Возвращает json всех достижений в порядке их создания
    """

    def get(self, request, format=None):
        achievements = Achievement.get_all_objects_by_id()
        serializer = AchievementSerializer(instance=achievements, many=True)
        data = {
            'count': len(achievements),
            'data': serializer.data
        }
        return Response(data)
