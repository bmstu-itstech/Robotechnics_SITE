from django.contrib import admin
from events.forms import ClassicEventForm
from events.models import ClassicEvent, Questionnaire


@admin.register(ClassicEvent)
class ClassicEventAdmin(admin.ModelAdmin):
    list_display = (
        'small_image_tmb',
        'name',
    )
    list_display_links = ('name', 'small_image_tmb',)
    filter_horizontal = ('partners',)
    readonly_fields = ('image_tmb',)
    form = ClassicEventForm


@admin.register(Questionnaire)
class QuestionnaireAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'group',
        'classic_event_name',
        'link_to_vk',
    )
    list_display_links = ('full_name',)

    def classic_event_name(self, obj):
        return obj.classic_event.name
    classic_event_name.short_description = 'классическое мероприятие'
