from django.db import models
from django.utils.safestring import mark_safe
from django_cleanup.signals import cleanup_pre_delete
from sorl.thumbnail import delete, get_thumbnail


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


class EventBaseModel(ImageBaseModel):
    name = models.CharField(
        'название',
        max_length=150,
        help_text='Максимум 150 символов',
    )
    description = models.TextField(
        'описание',
    )
    link_to_photo_album = models.URLField(
        'ссылка на фото-фльбом',
    )
    link_to_the_docs = models.URLField(
        'ссылка на документы',
    )
    venue = models.URLField(
        'место проведения',
    )

    class Meta:
        abstract = True
