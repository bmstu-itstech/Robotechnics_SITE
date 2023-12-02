from django import forms
from achievement.models import Achievement
from django.forms import TextInput, FileInput, Textarea, URLInput


class AchievementForm(forms.ModelForm):
    """!
    @brief Форма для админ панели достижений
    @details Нужна для того, чтобы расширить зону загрузки файлов
    """
    class Meta:
        model = Achievement
        fields = ('photo', 'title', 'description', 'link_to_photo_album', 'link_to_media',)
        widgets = {
            'photo': FileInput(attrs={'style': 'border: 1px solid #353535; padding: 5em; border-radius: 4px'}),
            'title': TextInput,
            'description': Textarea,
            'link_to_photo_album': URLInput,
            'link_to_media': URLInput,
        }
