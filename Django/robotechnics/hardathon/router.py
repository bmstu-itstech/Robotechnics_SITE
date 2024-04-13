from django.shortcuts import get_object_or_404
from hardathon.models import Hardathon, Project
from hardathon.serializers import (DetailProjectSerializer,
                                   HardathonByIdSerializer,
                                   HardathonSerializer,
                                   HardatonPartnersSerializer,
                                   HardatonProjectsSerializer)
from rest_framework.response import Response
from rest_framework.views import APIView


class HardathonViewSet(APIView):
    """!
    @brief API view для списка хардатонов
    @details Возвращает json всех хардатонов в порядке их создания или
        детальную информацию одного хардатона, если дополнительно передать pk объекта
    """
    def get(self, request, pk=None):
        data = {}
        if pk:
            hardaton = get_object_or_404(Hardathon, pk=pk)
            serializer = HardathonByIdSerializer(hardaton)
            data = serializer.data
        else:
            hardatons = Hardathon.get_all_objects_by_id()
            serializer = HardathonSerializer(instance=hardatons, many=True)
            data = {
                'count': len(hardatons),
                'hardatons': serializer.data
            }
        return Response(data)


class HardatonProjectsViewSet(APIView):
    """!
    @brief API view для проектов хардатона
    @details Возвращает json всех проектов или
        детальную информацию одного проекта, если дополнительно передать pk объекта
    """
    def get(self, request, pk=None):
        data = {}
        if pk:
            project = get_object_or_404(Project, pk=pk)
            serializer = DetailProjectSerializer(project)
            data = serializer.data
        else:
            projects = Project.get_all_objects_by_id()
            serializer = HardatonProjectsSerializer(instance=projects, many=True)
            data = {
                'count': len(projects),
                'projects': serializer.data
            }
        return Response(data)


class HardatonPartnersViewSet(APIView):
    """!
    @brief API view партнёров хардатона
    @details Возвращает json партнёров хардатона, переданного по pk
    """
    def get(self, request, pk=None):
        hardaton = get_object_or_404(Hardathon, pk=pk)
        partners = hardaton.partners.all()
        serializer = HardatonPartnersSerializer(instance=partners, many=True)
        data = {
            'count': len(partners),
            'partners': serializer.data
        }
        return Response(data)
