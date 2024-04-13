from director.models import Director  # noqa: F401
from director.serializers import DirectorSerializer  # noqa: F401
from rest_framework.views import APIView
from rest_framework.response import Response


class DirectorViewSet(APIView):
    """!
    @brief API view для руководителей
    @details Возвращает json всех руководителей в порядке их создания
    """

    def get(self, request, format=None):
        directors = Director.get_all_objects_by_id()
        serializer = DirectorSerializer(instance=directors, many=True)
        data = {
            'count': len(directors),
            'directors': serializer.data
        }
        return Response(data)
