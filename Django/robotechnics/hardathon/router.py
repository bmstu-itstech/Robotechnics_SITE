from django.shortcuts import get_object_or_404
from hardathon.models import Hardathon, Project
from hardathon.pagination import (HardathonPagination,
                                  HardatonPartnersPagination,
                                  HardatonProjectsPagination)
from hardathon.serializers import (DetailProjectSerializer,
                                   HardathonByIdSerializer,
                                   HardathonSerializer,
                                   HardatonPartnersSerializer,
                                   HardatonProjectsSerializer)
from rest_framework import routers, viewsets
from rest_framework.response import Response
from robotechnics.settings import Paginator_Size_Constants


class HardathonViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для хардатонов
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    @param pagination_class Пагинация
    """
    queryset = Hardathon.get_all_objects_by_id()
    serializer_class = HardathonSerializer
    pagination_class = HardathonPagination


class DetailHardatonViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для детальной информации хардатона
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    @param pagination_class Пагинация
    """
    queryset = Hardathon.get_all_objects_by_id()
    serializer_class = HardathonSerializer
    pagination_class = HardathonPagination

    def retrieve(self, request, pk=None):
        hardathon = get_object_or_404(self.queryset, pk=pk)
        serializer = HardathonByIdSerializer(hardathon)
        return Response(serializer.data)


class DetailProjectViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для подробной информации о проекте
    @details Нужен для автоматической маршрутизации
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Project.objects.all()
    serializer_class = DetailProjectSerializer


class HardatonProjectsViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для проектов хардатона
    @details Нужен для автоматической маршрутизации.
        Логика этого роутера отличается от логики остальных.
        Пагинация, по сути, происходит не в классе-пагинаторе,
        а в функции retrieve.
        Сериализация тоже происходит в этой функции.
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Project.objects.all()
    serializer_class = HardatonProjectsSerializer
    pagination_class = HardatonProjectsPagination

    def retrieve(self, request, *args, **kwargs):
        projects = self.queryset.filter(hardathon=kwargs['pk'])
        paginator = HardatonProjectsPagination()
        paginator.page_size = Paginator_Size_Constants['hardaton_projects']
        data = paginator.paginate_queryset(queryset=projects, request=request)
        serializer = HardatonProjectsSerializer(data, many=True)
        data = serializer.data
        data = paginator.get_paginated_response(data)
        return data


class HardatonPartnersViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для партнёров хардатона
    @details Нужен для автоматической маршрутизации.
        Логика этого роутера отличается от логики остальных.
        Пагинация, по сути, происходит не в классе-пагинаторе,
        а в функции retrieve.
        Сериализация тоже происходит в этой функции.
    @param queryset Список всех объектов из базы данных
    @param serializer_class Сериализатор
    """
    queryset = Hardathon.objects.all()
    serializer_class = HardatonPartnersSerializer
    pagination_class = HardatonPartnersPagination

    def retrieve(self, request, *args, **kwargs):
        hardaton = get_object_or_404(self.queryset, id=kwargs['pk'])
        paginator = HardatonPartnersPagination()
        paginator.page_size = Paginator_Size_Constants['hardaton_partners']
        data = paginator.paginate_queryset(queryset=hardaton.partners.all(), request=request)
        serializer = HardatonPartnersSerializer(data, many=True)
        data = serializer.data
        data = paginator.get_paginated_response(data)
        return data


hardatons_router = routers.DefaultRouter()
hardatons_router.register(r'', HardathonViewSet)

detail_project_router = routers.DefaultRouter()
detail_project_router.register(r'', DetailProjectViewSet)

projects_router = routers.DefaultRouter()
projects_router.register(r'', HardatonProjectsViewSet)

partners_router = routers.DefaultRouter()
partners_router.register(r'', HardatonPartnersViewSet)

detail_hardaton_router = routers.DefaultRouter()
detail_hardaton_router.register(r'', DetailHardatonViewSet)
