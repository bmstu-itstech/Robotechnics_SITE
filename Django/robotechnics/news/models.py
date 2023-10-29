from django.db import models
from core.models import ImageBaseModel  # noqa: F401


class News(ImageBaseModel):
    name = models.CharField(
        'название',
        max_length=150
    )
    description = models.TextField(
        'описание',
    )
    link_to_news = models.URLField(
        'ссылка на новость',
    )

    class Meta:
        verbose_name = 'новость'
        verbose_name_plural = 'новости'
