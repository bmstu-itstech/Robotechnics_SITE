from django.contrib import admin
from news.forms import NewsForm  # noqa: F401
from news.models import News  # noqa: F401


@admin.register(News)
class DirectorAdmin(admin.ModelAdmin):
    """!
    @brief Админ панель для новости
    @param list_display Поля модели, отображаемые на сайте:
                        маленькое изображение, название, ссылка на новость
    @param list_display_links Поля, являющиеся ссылками
                              на страницу редактирования:
                              маленькое изображение, название
    @param readonly_fields Readonly поля: изображение
    """
    list_display = [
        'small_photo_tmb',
        'name',
        'link_to_news',
    ]
    list_display_links = ('small_photo_tmb', 'name',)
    readonly_fields = ('photo_tmb',)
    form = NewsForm
