from rest_framework import pagination
from partners.models import Partner  # noqa: F401
from rest_framework.response import Response
from robotechnics.settings import BASE_URL  # noqa: F401


class HardathonPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для хардатонов
    @details Нужна, чтобы объекты в api передавались по несколько штук
    @param page_size Максимальное количество объектов на одной странице
    """
    page_size = 2

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'count': self.page.paginator.count,
            'len': len(data),
            'results': data
        })


class ProjectPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для проектов
    @details Нужна, чтобы объекты в api передавались по несколько штук
    @param page_size Максимальное количество объектов на одной странице
    """
    page_size = 6

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'count': self.page.paginator.count,
            'len': len(data),
            'results': data
        })


class HardatonPartnersPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для партнёров хардатона
    @details Нужна, чтобы объекты в api передавались по несколько штук.
        В этом пагинаторе идёт только изменение ссылок изображений.
        Основная логика происходит в роутере.
    @param page_size Максимальное количество объектов на одной странице
    """
    page_size = 5

    def get_paginated_response(self, data):
        for item in data:
            item['image'] = BASE_URL + item['image'][1:]
        return Response({
            'next': self.get_next_link(),
            'count': self.page.paginator.count,
            'len': len(data),
            'results': data,
        })
