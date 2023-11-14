from django.contrib import admin
from achievement.models import Achievement  # noqa: F401
from achievement.forms import AchievementForm  # noqa: F401


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    """!
    @brief Админ панель для достижения
    @param list_display Паля модели, отображаемые на сайте: маленькое изображение, название, ссылка на СМИ
    @param list_display_links Поля, являющиеся ссылками на страницу редактирования: маленькое изображение, название
    @param readonly_fields Readonly поля: изображение
    @param form Форма для редактирования/создания
    """
    list_display = [
        'small_image_tmb',
        'name',
        'link_to_media',
    ]
    list_display_links = ('small_image_tmb', 'name',)
    readonly_fields = ('image_tmb',)
    form = AchievementForm
    search_fields = ('name',)
