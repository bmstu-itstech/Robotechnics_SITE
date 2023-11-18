from rest_framework import pagination
from rest_framework.response import Response


class NewsPagination(pagination.PageNumberPagination):
    """!
    @brief Пагинация для новостей
    @details Нужна, чтобы объекты в api передавались по несколько штук
    @param page_size Максимальное количество объектов на одной странице
    """
    page_size = 6

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'count': len(data),
            'news': data
        })
