from core.models import ImageBaseModel  # noqa: F401
from django.db import models


class Achievement(ImageBaseModel):
    """!
    @brief Модель достижения
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
    @param name Название достижения, максимальная длина - 150 символов
    @param description Описание достижения
    @param link_to_photo_album ссылка на фото-альбом
    @param link_to_media ссылка на СМИ
    """
    name = models.CharField(
        'название',
        max_length=150,
    )
    description = models.TextField(
        'описание',
    )
    link_to_photo_album = models.URLField(
        'ссылка на фото-альбом',
    )
    link_to_media = models.URLField(
        'ссылка на СМИ',
    )

    class Meta:
        verbose_name = 'достижение'
        verbose_name_plural = 'достижения'
