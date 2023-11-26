from django import forms
from django.forms import FileInput
from events.models import ClassicEvent


class ClassicEventForm(forms.ModelForm):
    class Meta:
        model = ClassicEvent
        fields = '__all__'
        widgets = {
            'photo': FileInput(
                attrs={'style':
                       'border: 1px solid #353535; '
                       'padding: 5em; border-radius: 4px'}),
        }
