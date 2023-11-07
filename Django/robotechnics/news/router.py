from rest_framework import viewsets, routers
from news.models import News  # noqa: F401
from news.serializers import NewsSerializer  # noqa: F401


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


router = routers.DefaultRouter()
router.register(r'', NewsViewSet)
