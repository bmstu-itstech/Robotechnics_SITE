from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from news.serializers import NewsSerializer  # noqa: F401
from news.models import News  # noqa: F401


class NewsAPIView(APIView):
    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(
            instance=news,
            many=True,
        )
        data = {
            'count': len(news),
            'news': serializer.data
        }
        return Response(data)
