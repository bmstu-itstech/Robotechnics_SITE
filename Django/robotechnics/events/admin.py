from django.contrib import admin
from events.forms import ClassicEventForm
from events.models import ClassicEvent, Questionnaire


@admin.register(ClassicEvent)
class ClassicEventAdmin(admin.ModelAdmin):
    list_display = ('small_photo_tmb', 'title',)
    list_display_links = ('title', 'small_photo_tmb',)
    filter_horizontal = ('partners',)
    readonly_fields = ('photo_tmb',)
    form = ClassicEventForm


@admin.register(Questionnaire)
class QuestionnaireAdmin(admin.ModelAdmin):
    list_display = (
        'searcher_fio',
        'searcher_bmstu_group',
        'classic_event_title',
        'seacher_VK',
    )
    list_display_links = ('searcher_fio',)

    def classic_event_title(self, obj):
        return obj.classic_event.title
    classic_event_title.short_description = 'классическое мероприятие'
