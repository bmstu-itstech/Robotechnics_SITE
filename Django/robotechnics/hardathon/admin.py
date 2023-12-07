from django.contrib import admin
from hardathon.forms import HardathonForm, ProjectForm
from hardathon.models import Hardathon, Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'small_photo_tmb',
        'title',
        'hardathon_title',
    )
    list_display_links = ('title', 'small_photo_tmb')
    readonly_fields = ('photo_tmb',)
    form = ProjectForm

    def hardathon_title(self, obj):
        return obj.hardathon.title
    hardathon_title.short_description = 'хардатон'


@admin.register(Hardathon)
class HardathonAdmin(admin.ModelAdmin):
    list_display = (
        'small_photo_tmb',
        'title',
        'competition_task',
        'small_photo_tmb_org',
    )
    list_display_links = ('title', 'small_photo_tmb')
    filter_horizontal = ('partners',)
    readonly_fields = ('photo_tmb', 'photo_tmb_org')
    form = HardathonForm
