from django.shortcuts import get_object_or_404
from rest_framework import routers, viewsets
from hardathon.models import Hardathon, Project  # noqa: F401
from partners.models import Partner  # noqa: F401
from hardathon.serializers import (HardathonSerializer, DetailProjectSerializer,  # noqa: F401
                                   HardatonProjectsSerializer, HardatonPartnersSerializer)  # noqa: F401
from hardathon.pagination import HardathonPagination, HardatonProjectsPagination, HardatonPartnersPagination  # noqa: F401


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
        Пагинация, по сути, происходит не в классе-пагинаторе, а в функции retrieve.
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
        data = paginator.paginate_queryset(queryset=projects, request=request)  # !
        serializer = HardatonProjectsSerializer(data, many=True)
        data = serializer.data
        data = paginator.get_paginated_response(data)
        return data


class HardatonPartnersViewSet(viewsets.ModelViewSet):
    """!
    @brief Роутер для партнёров хардатона
    @details Нужен для автоматической маршрутизации.
        Логика этого роутера отличается от логики остальных.
        Пагинация, по сути, происходит не в классе-пагинаторе, а в функции retrieve.
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
        data = paginator.paginate_queryset(queryset=hardaton.partners.all(), request=request)
        serializer = HardatonPartnersSerializer(data, many=True)
        data = serializer.data
        data = paginator.get_paginated_response(data)
        return data


router = routers.DefaultRouter()
router.register(r'', HardathonViewSet)

router2 = routers.DefaultRouter()
router2.register(r'', DetailProjectViewSet)

router3 = routers.DefaultRouter()
router3.register(r'', HardatonProjectsViewSet)

router4 = routers.DefaultRouter()
router4.register(r'', HardatonPartnersViewSet)
