from core.models import EventBaseModel
from django.db import models
from events.validators import ValidateFullName, ValidateGroup
from partners.models import Partner


class ClassicEvent(EventBaseModel):
    """!
    @brief Модель классического мероприятия
    @param registration_link Ссылка на регистрацию
    @param partners ManyToMany связь с моделью Partner
    """
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
    """!
    @brief Модель анкеты
    @param full_name ФИО соискателя, максимальная длина - 150 символов,
                     валидатор - ValidateFullName
    @param group Учебная группа соискателя, максимальная длина - 15 символов,
                 валидатор - ValidateGroup
    @param number_of_people Количество людей в команде
    @param required_competencies Необходимые компетенции
    @param link_to_vk Ссылка на ВКонтакте соискателя
    @param additional_information Дополнительная информация
    @param classic_event ManyToOne связь с моделью ClassicEvent
    """
    searcher_fio = models.CharField(
        'фио участника',
        max_length=150,
        validators=[ValidateFullName()],
    )
    searcher_bmstu_group = models.CharField(
        'учебная группа',
        max_length=15,
        validators=[ValidateGroup()],
    )
    participants_count = models.IntegerField(
        'количество людей в команде',
    )
    required_competencies = models.TextField(
        'необходимые компетенции',
    )
    seacher_VK = models.URLField(
        'ссылка на ВКонтакте соискателя',
    )
    additional = models.TextField(
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
        ordering = ['-id']

    @staticmethod
    def get_all_objects_by_id():
        return Questionnaire.objects.order_by('-id')

    def __str__(self):
        return self.searcher_fio
