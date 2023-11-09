from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class StaticData(models.Model):
    """!
    @brief Модель для хранения относительно статических данных
    @param address Адрес организации
    @param phone Телефон организации
    @param email Почта организации
    @param link_to_driving_scheme Ссылка на схему проезда
    @param link_to_vk Ссылка на ВК
    @param link_to_telegram Ссылка на ТГ
    """
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
