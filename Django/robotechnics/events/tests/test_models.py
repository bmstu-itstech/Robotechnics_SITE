from datetime import datetime
from django.core.exceptions import ValidationError
from django.test import TestCase
from events.models import ClassicEvent, Questionnaire


class ModelTests(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.classic_event = ClassicEvent.objects.create(
            registration_link='https://test-classic-event-link',
            title='test',
            description='test description',
            photo_album_url='https://test-link',
            documents_url='https://test-link',
            location='place',
            event_date=datetime.now(),
            social_media_mention='https://test-link',
        )

    def tearDown(self):
        Questionnaire.objects.all().delete()
        super().tearDown()

    def test_wrong_group(self):
        questionnaire_count = Questionnaire.objects.count()
        group_endpoints = [
            'ИУ9- 12Б',
            'ИУ9 - 12Б',
            'ИУ 9-12Б',
            'ИУ-12Б',
            'ИУ-122Б',
        ]
        for group in group_endpoints:
            Questionnaire.objects.all().delete()
            with self.subTest(
                 f'This group must fail validation'
                 f' - "{group}"',
                 ):
                with self.assertRaises(ValidationError):
                    self.questionnaire = Questionnaire(
                        searcher_fio='Иванов Иван Иванович',
                        searcher_bmstu_group=group,
                        participants_count=5,
                        required_competencies='test',
                        seacher_VK='https://vk.com',
                        additional='test',
                        classic_event=self.classic_event,
                    )
                    self.questionnaire.full_clean()
                    self.questionnaire.save()

                self.assertEqual(Questionnaire.objects.count(),
                                 questionnaire_count)

    def test_right_group(self):
        questionnaire_count = Questionnaire.objects.count()
        group_endpoints = [
            'ИУ9-12Б',
            'ФН12-12БВ',
            'ИСОТ2-11М',
            'Э8-31',
            'СГН2-51Б',
        ]
        for group in group_endpoints:
            Questionnaire.objects.all().delete()
            with self.subTest(
                 f'The model with such group must be created'
                 f' - "{group}"',
                 ):

                self.questionnaire = Questionnaire(
                    searcher_fio='Иванов Иван Иванович',
                    searcher_bmstu_group=group,
                    participants_count=5,
                    required_competencies='test',
                    seacher_VK='https://vk.com',
                    additional='test',
                    classic_event=self.classic_event,
                )
                self.questionnaire.full_clean()
                self.questionnaire.save()

                self.assertEqual(Questionnaire.objects.count(),
                                 questionnaire_count + 1)

    def test_right_full_name(self):
        questionnaire_count = Questionnaire.objects.count()
        full_name_endpoints = [
            'Иванов Иван Иванович',
            'Аля-Вавилова Антонина Сергеевна',
            'Буб Лев Антонович',
            'Джо Блэк',
        ]
        for full_name in full_name_endpoints:
            Questionnaire.objects.all().delete()
            with self.subTest(
                 f'The model with such full name must be created'
                 f' - "{full_name}"',
                 ):

                self.questionnaire = Questionnaire(
                    searcher_fio=full_name,
                    searcher_bmstu_group='ИУ9-12Б',
                    participants_count=5,
                    required_competencies='test',
                    seacher_VK='https://vk.com',
                    additional='test',
                    classic_event=self.classic_event,
                )
                self.questionnaire.full_clean()
                self.questionnaire.save()

                self.assertEqual(Questionnaire.objects.count(),
                                 questionnaire_count + 1)

    def test_wrong_full_name(self):
        questionnaire_count = Questionnaire.objects.count()
        full_name_endpoints = [
            'Иванов',
            'Буб-Лев-Антонович',
            'БубЛевАнтонович',
            'Иванов Иван Алексей Иванович Сергеевич',
        ]
        for full_name in full_name_endpoints:
            Questionnaire.objects.all().delete()
            with self.subTest(
                 f'This full name must fail validation'
                 f' - "{full_name}"',
                 ):
                with self.assertRaises(ValidationError):
                    self.questionnaire = Questionnaire(
                        searcher_fio=full_name,
                        searcher_bmstu_group='ИУ9-12Б',
                        participants_count=5,
                        required_competencies='test',
                        seacher_VK='https://vk.com',
                        additional='test',
                        classic_event=self.classic_event,
                    )
                    self.questionnaire.full_clean()
                    self.questionnaire.save()

                self.assertEqual(Questionnaire.objects.count(),
                                 questionnaire_count)
