from django import forms
from director.models import Director  # noqa: F401
from django.forms import FileInput, TextInput, EmailInput


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ('image', 'name', 'email', 'post')
        widgets = {
            'image': FileInput(attrs={'style': 'border: 1px solid #353535; padding: 5em; border-radius: 4px'}),
            'name': TextInput,
            'email': EmailInput,
            'post': TextInput,
        }