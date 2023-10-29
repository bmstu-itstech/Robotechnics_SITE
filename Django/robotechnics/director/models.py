from django.db import models
from core.models import ImageBaseModel  # noqa: F401


class Director(ImageBaseModel):
    name = models.CharField(
        'ФИО',
        max_length=150,
    )
    email = models.EmailField(
        'email',
        max_length=150,
    )
    post = models.CharField(
        'должность',
        max_length=150,
    )

    class Meta:
        verbose_name = 'руководитель'
        verbose_name_plural = 'руководители'
