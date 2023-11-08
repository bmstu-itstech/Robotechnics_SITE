from django.db import models
from core.models import ImageBaseModel  # noqa: F401


class News(ImageBaseModel):
    """!
    @brief Модель новости
    @param name Название, максимальная длина - 150 символов
    @param description Описание
    @param link_to_news Ссылка на новость
    """
    name = models.CharField(
        'название',
        max_length=150
    )
    description = models.TextField(
        'описание',
    )
    link_to_news = models.URLField(
        'ссылка на новость',
    )

    class Meta:
        verbose_name = 'новость'
        verbose_name_plural = 'новости'

    @staticmethod
    def get_all_objects_by_date():
        return News.objects.order_by('-id')
