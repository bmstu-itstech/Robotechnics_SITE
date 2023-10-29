from core.models import ImageBaseModel  # noqa: F401
from django.db import models


class Partner(ImageBaseModel):
    """!
    @brief Модель партнёра
    @details Класс наследуется от ImageBaseModel
    @code
    class ImageBaseModel(models.Model):
        image = models.ImageField(
            'изображение к мероприятию',
            upload_to='images/%Y/%m/%d',
            blank=True,
        )

        class Meta:
            abstract = True

        @property
        def get_img(self):
            return get_thumbnail(self.image, '300x300', crop='center', quality=51)

        def image_tmb(self):
            if self.image:
                return mark_safe(
                    f'<img src="{self.get_img.url}"',
                )
            return 'Нет изображения'

        image_tmb.short_description = 'главное изображение'
        image_tmb.allow_tags = True

        @property
        def get_small_img(self):
            return get_thumbnail(self.image, '50x50', crop='center', quality=51)

        def small_image_tmb(self):
            if self.image:
                return mark_safe(
                    f'<img src="{self.get_small_img.url}" ',
                )
            return 'Нет изображения'

        small_image_tmb.short_description = 'главное изображение'
        small_image_tmb.allow_tags = True

        def sorl_delete(**kwargs):
            delete(kwargs['file'])

        cleanup_pre_delete.connect(sorl_delete)

        def __str__(self):
            return self.name
    @endcode
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
