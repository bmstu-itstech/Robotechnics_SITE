from core.models import ImageBaseModel  # noqa: F401
from django.db import models


class Partner(ImageBaseModel):
    """!
    @brief Модель партнёра
    @param name Название, максимальная длина - 150 символов
    @param link_to_the_site Ссылка на сайт
    """
    name = models.CharField(
        'название',
        max_length=150,
        help_text='Максимум 150 символов',
    )
    link_to_the_site = models.URLField(
        'ссылка на сайт',
    )

    class Meta:
        verbose_name = 'партнёр'
        verbose_name_plural = 'партнёры'
