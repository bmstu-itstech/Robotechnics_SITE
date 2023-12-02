from django.contrib import admin
from news.forms import NewsForm
from news.models import News


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    """!
    @brief Админ панель для новости
    @param list_display Паля модели, отображаемые на сайте: маленькое изображение, название, ссылка на новость
    @param list_display_links Поля, являющиеся ссылками на страницу редактирования: маленькое изображение, название
    @param readonly_fields Readonly поля: изображение
    @param form Форма для редактирования/создания
    @param search_fields Поля поиска
    """
    list_display = (
        'small_image_tmb',
        'title',
        'new_url',
    )
    list_display_links = ('small_image_tmb', 'title',)
    readonly_fields = ('image_tmb',)
    form = NewsForm
    search_fields = ('title',)
