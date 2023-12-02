from core.models import ImageBaseModel
from django.db import models


class Partner(ImageBaseModel):
    """!
    @brief Модель партнёра
    @param title Название, максимальная длина - 150 символов
    @param link Ссылка на сайт
    """
    title = models.CharField(
        'название',
        max_length=150,
        help_text='Максимум 150 символов',
    )
    link = models.URLField(
        'ссылка на сайт',
    )

    class Meta:
        verbose_name = 'партнёр'
        verbose_name_plural = 'партнёры'

    @staticmethod
    def get_all_objects_by_id():
        return Partner.objects.order_by('-id')
