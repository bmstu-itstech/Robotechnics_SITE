from django import forms
from achievement.models import Achievement  # noqa: F401
from django.forms import ImageField, TextInput, FileInput, Textarea, URLInput


class AchievementForm(forms.ModelForm):

    class Meta:
        model = Achievement
        fields = ('image', 'name', 'description', 'link_to_photo_album', 'link_to_media',)
        widgets = {
            'image': FileInput(attrs={'style': 'border: 1px solid red; padding: 5em'}),
            'name': TextInput,
            'description': Textarea,
            'link_to_photo_album': URLInput,
            'link_to_media': URLInput,
        }
