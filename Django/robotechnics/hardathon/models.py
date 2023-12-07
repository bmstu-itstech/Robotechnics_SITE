from core.models import EventBaseModel, ImageBaseModel
from django.db import models
from django.utils.safestring import mark_safe
from partners.models import Partner
from sorl.thumbnail import get_thumbnail


class Hardathon(EventBaseModel):
    """!
    @brief Модель хардатона
    @param application_start_date Дата начала приёма заявок
    @param date_of_summing_up Дата подведения итогов
    @param organizers_photo Фото главного организатора, может быть пустым,
                            загружается в *organizers_photos/%Y/%m/%d*
    @param organizers_word Ссылка на слово главного организатора
    @param link_to_competition_task Ссылка на конкурсное задание
    @param partners ManyToMany связь с моделью Partner
    """
    date_for_accepting_applications = models.DateField(
        'дата начала приёма заявок',
    )
    closing_date_for_applications = models.DateField(
        'дата окончания приёма заявок',
    )
    summing_up_date = models.DateField(
        'дата подведения итогов',
    )
    main_organizer_photo = models.ImageField(
        'фотография главного организатора',
        upload_to='organizers_photos/%Y/%m/%d',
        blank=True,
    )
    main_organizer_word = models.URLField(
        'слово главного организатора',
    )
    competition_task = models.URLField(
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
    def get_photo_org(self):
        """!
        @brief Метод получения изображения организатора
        @return Возвращает
        @code
        get_thumbnail(
            self.organizers_photo, '300x300', crop='center', quality=51)
        @endcode
        """
        return get_thumbnail(self.main_organizer_photo, '300x300', crop='center',
                             quality=51)

    def photo_tmb_org(self):
        """!
        @brief Метод получения тега изображения организатора со ссылкой
        @return Если изображения нет, то возвращает строку *Нет изображения*.
        Если изображение есть, то возвращает тег *<img src="...">*
        """
        if self.main_organizer_photo:
            return mark_safe(
                f'<img src="{self.get_photo_org.url}"',
            )
        return 'Нет изображения'

    photo_tmb_org.short_description = 'фотография главного организатора'
    photo_tmb_org.allow_tags = True

    @property
    def get_small_photo_org(self):
        """!
        @brief Метод получения изображения организатора маленького размера
        @return Возвращает
        @code
        get_thumbnail(
            self.organizers_photo, '50x50', crop='center', quality=51)
        @endcode
        """
        return get_thumbnail(self.main_organizer_photo, '50x50', crop='center',
                             quality=51)

    def small_photo_tmb_org(self):
        """!
        @brief Метод получения тега маленького изображения организатора
               со ссылкой
        @return Если изображения нет, то возвращает строку *Нет изображения*.
        Если изображение есть, то возвращает тег *<img src="...">*
        """
        if self.main_organizer_photo:
            return mark_safe(
                f'<img src="{self.get_small_photo_org.url}" ',
            )
        return 'Нет изображения'

    small_photo_tmb_org.short_description = 'фотография главного организатора'
    small_photo_tmb_org.allow_tags = True

    @staticmethod
    def get_all_objects_by_id():
        return Hardathon.objects.order_by('-id')


class Project(ImageBaseModel):
    title = models.CharField(
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

    @staticmethod
    def get_all_objects_by_id():
        return Project.objects.order_by('-id')
