from django import forms
from django.forms import FileInput, Textarea, TextInput, URLInput
from news.models import News  # noqa: F401


class NewsForm(forms.ModelForm):
    """!
    @brief Форма для админ панели новостей
    @details Нужна для того, чтобы расширить зону загрузки файлов
    """
    class Meta:
        model = News
        fields = ('photo', 'title', 'description', 'new_url')
        widgets = {
            'photo': FileInput(attrs={'style': 'border: 1px solid #353535;'
                                               'padding: 5em;'
                                               'border-radius: 4px'}),
            'title': TextInput,
            'description': Textarea,
            'new_url': URLInput,
        }
