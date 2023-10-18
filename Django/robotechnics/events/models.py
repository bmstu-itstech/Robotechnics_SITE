from core.models import EventBaseModel
from django.db import models
from events.validators import ValidateFullName, ValidateGroup
from partners.models import Partner


class ClassicEvent(EventBaseModel):
    link_to_the_registr = models.URLField(
        'ссылка на регистрацию',
    )
    partner = models.ManyToManyField(
        Partner,
        verbose_name='партнёры классического мероприятия',
    )

    class Meta:
        verbose_name = 'классическое мероприятие'
        verbose_name_plural = 'классические мероприятия'


class Questionnaire(models.Model):
    full_name = models.CharField(
        'фио участника',
        max_length=150,
        validators=[ValidateFullName()],
    )
    group = models.CharField(
        'учебная группа',
        max_length=15,
        validators=[ValidateGroup()],
    )
    number_of_people = models.IntegerField(
        'количество людей в команде',
    )
    required_competencies = models.TextField(
        'необходимые компетенции',
    )
    link_to_vk = models.URLField(
        'ссылка на ВКонтакте соискателя',
    )
    additional_information = models.TextField(
        'дополнительная информация',
    )
    classic_event = models.ForeignKey(
        'ClassicEvent',
        verbose_name='классическое мероприятие',
        on_delete=models.CASCADE,
    )

    class Meta:
        verbose_name = 'анкета'
        verbose_name_plural = 'анкеты'
