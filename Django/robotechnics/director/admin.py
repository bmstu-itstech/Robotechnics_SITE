from director.forms import DirectorForm  # noqa: F401
from director.models import Director  # noqa: F401
from django.contrib import admin


@admin.register(Director)
class DirectorAdmin(admin.ModelAdmin):
    """!
    @brief Админ панель для руководителя
    @param list_display Поля модели, отображаемые на сайте:
                        маленькое изображение, ФИО, email, должность
    @param list_display_links Поля, являющиеся ссылками
                              на страницу редактирования:
                              маленькое изображение, ФИО
    @param readonly_fields Readonly поля: изображение
    """
    list_display = [
        'small_photo_tmb',
        'name',
        'email',
        'post',
    ]
    list_display_links = ('small_photo_tmb', 'name',)
    readonly_fields = ('photo_tmb',)
    form = DirectorForm
