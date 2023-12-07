from django.contrib import admin
from static_data.models import StaticData


@admin.register(StaticData)
class StaticDataAdmin(admin.ModelAdmin):
    """!
    @brief Админ панель для статических данных
    @param list_display Поля модели, отображаемые на сайте:
                        адрес, телефон, email, ссылка на вк, ссылка на телеграм
    """
    list_display = (
        'address',
        'phone',
        'email',
        'link_to_vk',
        'link_to_telegram'
    )
    search_fields = ('address', 'phone', 'email',)
