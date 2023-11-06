from django.db import models
from django.utils.safestring import mark_safe
from django_cleanup.signals import cleanup_pre_delete
from sorl.thumbnail import delete, get_thumbnail


class ImageBaseModel(models.Model):
    """!
    @brief Базовая модель с изображением
    @details Класс является абстрактным
    @param image Файл изображения, может быть пустым, загружается по пути *images/%Y/%m/%d*
    @param image_tmb Поле изображения
    @param small_image_tmb Поле маленького изображения
    """
    image = models.ImageField(
        'изображение к мероприятию',
        upload_to='images/%Y/%m/%d',
        blank=True,
    )

    class Meta:
        abstract = True

    @property
    def get_img(self):
        """!
        @brief Метод получения изображения
        @return Возвращает
        @code
        get_thumbnail(self.image, '300x300', crop='center', quality=51)
        @endcode
        """
        return get_thumbnail(self.image, '300x300', crop='center', quality=51)

    def image_tmb(self):
        """!
        @brief Метод получения тега изображения со ссылкой
        @return Если изображения нет, то возвращает строку *Нет изображения*.
        Если изображение есть, то возвращает тег *<img src="...">*
        """
        if self.image:
            return mark_safe(
                f'<img src="{self.get_img.url}"',
            )
        return 'Нет изображения'

    image_tmb.short_description = 'главное изображение'
    image_tmb.allow_tags = True

    @property
    def get_small_img(self):
        """!
        @brief Метод получения изображения маленького размера
        @return Возвращает
        @code
        get_thumbnail(self.image, '50x50', crop='center', quality=51)
        @endcode
        """
        return get_thumbnail(self.image, '50x50', crop='center', quality=51)

    def small_image_tmb(self):
        """!
        @brief Метод получения тега маленького изображения со ссылкой
        @return Если изображения нет, то возвращает строку *Нет изображения*.
        Если изображение есть, то возвращает тег *<img src="...">*
        """
        if self.image:
            return mark_safe(
                f'<img src="{self.get_small_img.url}" ',
            )
        return 'Нет изображения'

    small_image_tmb.short_description = 'главное изображение'
    small_image_tmb.allow_tags = True

    def sorl_delete(**kwargs):
        """!
        @brief Метод удаления изображения
        @details Метод вызывается при удалении объекта из базы данных
        """
        delete(kwargs['file'])

    cleanup_pre_delete.connect(sorl_delete)

    def __str__(self):
        return self.name


class EventBaseModel(ImageBaseModel):
    """!
    @brief Базовая модель мероприятия
    @details Класс наследуется от ImageBaseModel и является абстрактным
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
    @param name Название мероприятия, максимальная длина - 150 символов
    @param description Описание мероприятия
    @param link_to_photo_album Ссылка на фото-альбом
    @param link_to_the_docs Ссылка на документы
    @param venue Ссылка на место проведения
    """
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
