from core.models import EventBaseModel, ImageBaseModel
from django.db import models
from django.utils.safestring import mark_safe
from partners.models import Partner
from sorl.thumbnail import get_thumbnail


class Hardathon(EventBaseModel):
    application_start_date = models.DateField(
        'дата начала приёма заявок',
    )
    date_of_summing_up = models.DateField(
        'дата подведения итогов',
    )
    organizers_photo = models.ImageField(
        'фотография главного организатора',
        upload_to='organizers_images/%Y/%m/%d',
        blank=True,
    )
    organizers_word = models.URLField(
        'слово главного организатора',
    )
    link_to_competition_task = models.URLField(
        'ссылка на конкурсное задание',
    )
    partner = models.ManyToManyField(
        Partner,
        verbose_name='партнёры хардатона',
    )

    class Meta:
        verbose_name = 'хардатон'
        verbose_name_plural = 'хардатоны'

    @property
    def get_img_org(self):
        return get_thumbnail(self.organizers_photo, '300x300', crop='center',
                             quality=51)

    def image_tmb_org(self):
        if self.organizers_photo:
            return mark_safe(
                f'<img src="{self.get_img_org.url}"',
            )
        return 'Нет изображения'

    organizers_photo.short_description = 'главное изображение'
    organizers_photo.allow_tags = True


class Project(ImageBaseModel):
    name = models.CharField(
        'название',
        max_length=150,
        help_text='Максимум 150 символов',
    )
    description = models.TextField(
        'описание',
    )
    competition_rules = models.TextField(
        'правила соревнования',
    )
    implementation_scale = models.TextField(
        'масштаб реализации',
    )
    hardathon = models.ForeignKey(
        'Hardathon',
        verbose_name='хардатон',
        on_delete=models.CASCADE,
    )

    class Meta:
        verbose_name = 'проект'
        verbose_name_plural = 'проекты'
