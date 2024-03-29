from rest_framework import pagination
from rest_framework.response import Response
from robotechnics.settings import BASE_URL, Paginator_Size_Constants


class HardathonPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для хардатонов
    @details Нужна, чтобы объекты в api передавались по несколько штук
    @param page_size Максимальное количество объектов на одной странице
    """
    page_size = Paginator_Size_Constants['hardatons']

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'count': len(data),
            'total_count': self.page.paginator.count,
            'hardatons': data
        })


class HardatonPartnersPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для партнёров хардатона
    @details Нужна, чтобы объекты в api передавались по несколько штук.
        В этом пагинаторе идёт только изменение ссылок изображений.
        Основная логика происходит в роутере.
    """

    def get_paginated_response(self, data):
        for item in data:
            if item['photo']:
                item['photo'] = BASE_URL + item['photo'][1:]
            else:
                item['photo'] = 'None'
        return Response({
            'next': self.get_next_link(),
            'count': len(data),
            'total_count': self.page.paginator.count,
            'partners': data,
        })


class HardatonProjectsPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для проектов хардатона
    @details Нужна, чтобы объекты в api передавались по несколько штук.
        Основная логика происходит в роутере.
    """

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'count': len(data),
            'total_count': self.page.paginator.count,
            'projects': data,
        })
