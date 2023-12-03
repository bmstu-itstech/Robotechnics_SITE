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
        paginator.page_size = 6
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
        paginator.page_size = 5
        data = paginator.paginate_queryset(queryset=hardaton.partners.all(),
                                           request=request)
        serializer = HardatonPartnersSerializer(data, many=True)
        data = serializer.data
        data = paginator.get_paginated_response(data)
        return data


router_hardathon = routers.DefaultRouter()
router_hardathon.register(r'', HardathonViewSet)

router_detail_project = routers.DefaultRouter()
router_detail_project.register(r'', DetailProjectViewSet)

router_hardathon_projects = routers.DefaultRouter()
router_hardathon_projects.register(r'', HardatonProjectsViewSet)

router_hardathon_partners = routers.DefaultRouter()
router_hardathon_partners.register(r'', HardatonPartnersViewSet)
