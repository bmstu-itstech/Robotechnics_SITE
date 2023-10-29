from core.models import EventBaseModel, ImageBaseModel  # noqa: F401
from django.db import models
from django.utils.safestring import mark_safe
from partners.models import Partner  # noqa: F401
from sorl.thumbnail import get_thumbnail


class Hardathon(EventBaseModel):
    """!
    @brief Модель хардатона
    @details Класс наследуется от EventBaseModel
    @code
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
            'ссылка на фото-альбом',
        )
        link_to_the_docs = models.URLField(
            'ссылка на документы',
        )
        venue = models.URLField(
            'место проведения',
        )

        class Meta:
            abstract = True
    @endcode
    @param application_start_date Дата начала приёма заявок
    @param date_of_summing_up Дата подведения итогов
    @param organizers_photo Фото главного организатора, может быть пустым, загружается в *organizers_images/%Y/%m/%d*
    @param organizers_word Ссылка на слово главного организатора
    @param link_to_competition_task Ссылка на конкурсное задание
    @param partners ManyToMany связь с моделью Partner
    """
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
    partners = models.ManyToManyField(
        Partner,
        verbose_name='партнёры хардатона',
    )

    class Meta:
        verbose_name = 'хардатон'
        verbose_name_plural = 'хардатоны'

    @property
    def get_img_org(self):
        """!
        @brief Метод получения изображения организатора
        @return Возвращает
        @code
        get_thumbnail(self.organizers_photo, '300x300', crop='center', quality=51)
        @endcode
        """
        return get_thumbnail(self.organizers_photo, '300x300', crop='center',
                             quality=51)

    def image_tmb_org(self):
        """!
        @brief Метод получения тега изображения организатора со ссылкой
        @return Если изображения нет, то возвращает строку *Нет изображения*.
        Если изображение есть, то возвращает тег *<img src="...">*
        """
        if self.organizers_photo:
            return mark_safe(
                f'<img src="{self.get_img_org.url}"',
            )
        return 'Нет изображения'

    image_tmb_org.short_description = 'фотография главного организатора'
    image_tmb_org.allow_tags = True

    @property
    def get_small_img_org(self):
        """!
        @brief Метод получения изображения организатора маленького размера
        @return Возвращает
        @code
        get_thumbnail(self.organizers_photo, '50x50', crop='center', quality=51)
        @endcode
        """
        return get_thumbnail(self.organizers_photo, '50x50', crop='center',
                             quality=51)

    def small_image_tmb_org(self):
        """!
        @brief Метод получения тега маленького изображения организатора со ссылкой
        @return Если изображения нет, то возвращает строку *Нет изображения*.
        Если изображение есть, то возвращает тег *<img src="...">*
        """
        if self.image:
            return mark_safe(
                f'<img src="{self.get_small_img_org.url}" ',
            )
        return 'Нет изображения'

    small_image_tmb_org.short_description = 'фотография главного организатора'
    small_image_tmb_org.allow_tags = True


class Project(ImageBaseModel):
    """!
    @brief Модель проекта
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
    @param name Название, максимальная длина- 150 символов
    @param description Описание
    @param competition_rules Правила соревнования
    @param implementation_scale Масштаб реализации
    @param hardathon ManyToOne связь с моделью Hardathon
    """
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
