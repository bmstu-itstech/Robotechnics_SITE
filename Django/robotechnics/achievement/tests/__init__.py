from achievement.models import Achievement  # noqa: F401
from django.test import TestCase
from django.core.exceptions import ValidationError


class AchievementTestCase(TestCase):
    def setUp(self):
        Achievement.objects.create(
            name='достижение1',
            description='описание1',
            link_to_photo_album='https://url.com',
            link_to_media='https://url.com',
            image='1.png',
        ).save()

    def test_create_good(self):
        item = Achievement.objects.create(
            name='достижение2',
            description='описание2',
            link_to_photo_album='https://url2.com',
            link_to_media='https://url2.com',
            image='2.png',
        )
        item.full_clean()
        item.save()
        self.assertEqual(Achievement.objects.count(), 2)

    def test_create_bad(self):
        item = Achievement.objects.create(
            name='достижение3',
            description='описание3',
            link_to_photo_album='https://url3.com',
            link_to_media='text',
            image='3.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = Achievement.objects.create(
            description='описание4',
            link_to_photo_album='http://url4.com',
            link_to_media='https://url4.com',
            image='4.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        self.assertEqual(Achievement.objects.count(), 1)
