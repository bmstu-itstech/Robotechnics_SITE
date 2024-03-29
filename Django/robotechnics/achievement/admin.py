from achievement.forms import AchievementForm  # noqa: F401
from achievement.models import Achievement  # noqa: F401
from django.contrib import admin


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    """!
    @brief Админ панель для достижения
    @param list_display Поля модели, отображаемые на сайте:
                        маленькое изображение, название, ссылка на СМИ
    @param list_display_links Поля, являющиеся ссылками
                              на страницу редактирования:
                              маленькое изображение, название
    @param readonly_fields Readonly поля: изображение
    @param form Форма для редактирования/создания
    @param search_fields Поля поиска
    """
    list_display = (
        'small_photo_tmb',
        'title',
        'link_to_media',
    )
    list_display_links = ('small_photo_tmb', 'title',)
    readonly_fields = ('photo_tmb',)
    form = AchievementForm
    search_fields = ('title',)
