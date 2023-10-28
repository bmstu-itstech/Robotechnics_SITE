from django.contrib import admin
from hardathon.models import Hardathon, Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'small_image_tmb',
        'name',
        'hardathon_name',
    )
    list_display_links = ('name',)
    readonly_fields = ('image_tmb',)

    def hardathon_name(self, obj):
        return obj.hardathon.name
    hardathon_name.short_description = 'хардатон'


@admin.register(Hardathon)
class HardathonAdmin(admin.ModelAdmin):
    list_display = (
        'small_image_tmb',
        'name',
        'link_to_competition_task',
        'small_image_tmb_org',
    )
    list_display_links = ('name',)
    filter_horizontal = ('partners',)
