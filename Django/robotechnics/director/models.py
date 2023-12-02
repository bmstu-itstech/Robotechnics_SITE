from core.models import ImageBaseModel  # noqa: F401
from django.db import models


class Director(ImageBaseModel):
    """!
    @brief Модель руководителя
    @param fio ФИО, максимальная длина - 150 символов
    @param email Email, максимальная длина - 150 символов
    @param role Должность, максимальная длина - 150 символов
    """
    fio = models.CharField(
        'ФИО',
        max_length=150,
    )
    email = models.EmailField(
        'email',
        max_length=150,
    )
    role = models.CharField(
        'должность',
        max_length=150,
    )

    class Meta:
        verbose_name = 'руководитель'
        verbose_name_plural = 'руководители'

    @staticmethod
    def get_all_objects_by_id():
        return Director.objects.order_by('-id')

    def __str__(self):
        return self.fio
