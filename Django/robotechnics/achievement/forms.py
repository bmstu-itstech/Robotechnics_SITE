from achievement.models import Achievement  # noqa: F401
from django import forms
from django.forms import FileInput, Textarea, TextInput, URLInput


class AchievementForm(forms.ModelForm):
    class Meta:
        model = Achievement
        fields = ('photo', 'name', 'description',
                  'photo_album_url', 'link_to_media',)
        widgets = {
            'photo': FileInput(attrs={'style':
                                      'border: 1px solid #353535;'
                                      'padding: 5em; border-radius: 4px'}),
            'name': TextInput,
            'description': Textarea,
            'photo_album_url': URLInput,
            'link_to_media': URLInput,
        }
