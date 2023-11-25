from director.models import Director  # noqa: F401
from django import forms
from django.forms import EmailInput, FileInput, TextInput


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ('photo', 'name', 'email', 'post')
        widgets = {
            'photo': FileInput(attrs={'style': 'border: 1px solid #353535;'
                                      'padding: 5em; border-radius: 4px'}),
            'name': TextInput,
            'email': EmailInput,
            'post': TextInput,
        }
