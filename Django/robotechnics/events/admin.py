from django.contrib import admin
from events.forms import ClassicEventForm
from events.models import ClassicEvent, Questionnaire


@admin.register(ClassicEvent)
class ClassicEventAdmin(admin.ModelAdmin):
    list_display = ('small_image_tmb', 'title',)
    list_display_links = ('title', 'small_image_tmb',)
    filter_horizontal = ('partners',)
    readonly_fields = ('image_tmb',)
    form = ClassicEventForm


@admin.register(Questionnaire)
class QuestionnaireAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'group',
        'classic_event_title',
        'link_to_vk',
    )
    list_display_links = ('full_name',)

    def classic_event_title(self, obj):
        return obj.classic_event.title
    classic_event_title.short_description = 'классическое мероприятие'
