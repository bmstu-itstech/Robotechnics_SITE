from core.models import ImageBaseModel
from django.db import models


class Partner(ImageBaseModel):
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
