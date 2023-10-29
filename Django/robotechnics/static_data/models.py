from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class StaticData(models.Model):
    address = models.CharField(
        'адрес',
        max_length=150,
    )
    phone = PhoneNumberField(
        'телефон',
    )
    email = models.EmailField(
        'email',
    )
    link_to_driving_scheme = models.URLField(
        'ссылка на схему проезда',
    )
    link_to_vk = models.URLField(
        'ссылка на вк',
    )
    link_to_telegram = models.URLField(
        'ссылка на телеграм',
    )

    class Meta:
        verbose_name = 'статические данные'
        verbose_name_plural = 'статические данные'
