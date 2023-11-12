from core.models import EventBaseModel  # noqa: F401
from django.db import models
from events.validators import ValidateFullName, ValidateGroup  # noqa: F401
from partners.models import Partner  # noqa: F401


class ClassicEvent(EventBaseModel):
    registration_link = models.URLField(
        'ссылка на регистрацию',
    )
    partners = models.ManyToManyField(
        Partner,
        verbose_name='партнёры классического мероприятия',
    )

    class Meta:
        verbose_name = 'классическое мероприятие'
        verbose_name_plural = 'классические мероприятия'

    @staticmethod
    def get_all_objects_by_id():
        return ClassicEvent.objects.order_by('-id')


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

    def __str__(self):
        return self.full_name
