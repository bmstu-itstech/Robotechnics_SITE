from django.contrib import admin
from achievement.models import Achievement  # noqa: F401


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = [
        'small_image_tmb',
        'name',
        'link_to_media',
    ]
    list_display_links = ('small_image_tmb', 'name',)
    readonly_fields = ('image_tmb',)
