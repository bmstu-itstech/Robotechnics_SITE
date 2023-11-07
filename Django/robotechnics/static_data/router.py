from rest_framework import routers, viewsets
from static_data.models import StaticData  # noqa: F401
from static_data.serializers import StaticDataSerializer  # noqa: F401


class StaticDataViewSet(viewsets.ModelViewSet):
    queryset = StaticData.objects.all()
    serializer_class = StaticDataSerializer


router = routers.DefaultRouter()
router.register(r'', StaticDataViewSet)
