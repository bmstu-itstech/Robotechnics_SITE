from django import forms
from django.forms import FileInput, Textarea, TextInput, URLInput
from news.models import News  # noqa: F401


class NewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ('photo', 'name', 'description', 'link_to_news')
        widgets = {
            'photo': FileInput(attrs={'style': 'border: 1px solid #353535;'
                                      'padding: 5em; border-radius: 4px'}),
            'name': TextInput,
            'description': Textarea,
            'link_to_news': URLInput,
        }
