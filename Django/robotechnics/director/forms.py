from django import forms
from director.models import Director
from django.forms import FileInput, TextInput, EmailInput


class DirectorForm(forms.ModelForm):
    """!
    @brief Форма для админ панели руководителей
    @details Нужна для того, чтобы расширить зону загрузки файлов
    """
    class Meta:
        model = Director
        fields = ('photo', 'fio', 'email', 'role')
        widgets = {
            'photo': FileInput(attrs={'style': 'border: 1px solid #353535; padding: 5em; border-radius: 4px'}),
            'fio': TextInput,
            'email': EmailInput,
            'role': TextInput,
        }
