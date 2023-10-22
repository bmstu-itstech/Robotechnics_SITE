from core.models import ImageBaseModel  # noqa: F401
from django.db import models


class Achievement(ImageBaseModel):
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
