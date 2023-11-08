from django import forms
from news.models import News  # noqa: F401
from django.forms import TextInput, FileInput, Textarea, URLInput


class NewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ('image', 'name', 'description', 'link_to_news')
        widgets = {
            'image': FileInput(attrs={'style': 'border: 1px solid #353535; padding: 5em; border-radius: 4px'}),
            'name': TextInput,
            'description': Textarea,
            'link_to_news': URLInput,
        }