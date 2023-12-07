from achievement.models import Achievement  # noqa: F401
from django.core.exceptions import ValidationError
from django.test import TestCase


class AchievementTestCase(TestCase):
    def setUp(self):
        Achievement.objects.create(
            name='достижение1',
            description='описание1',
            photo_album_url='https://url.com',
            link_to_media='https://url.com',
            photo='1.png',
        ).save()

    def tearDown(self):
        Achievement.objects.all().delete()
        super().tearDown()

    def test_create_good(self):
        item = Achievement.objects.create(
            name='достижение2',
            description='описание2',
            photo_album_url='https://url2.com',
            link_to_media='https://url2.com',
            photo='2.png',
        )
        item.full_clean()
        item.save()
        self.assertEqual(Achievement.objects.count(), 2)

    def test_create_bad(self):
        item = Achievement.objects.create(
            name='достижение3',
            description='описание3',
            photo_album_url='https://url3.com',
            link_to_media='text',
            photo='3.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = Achievement.objects.create(
            description='описание4',
            photo_album_url='http://url4.com',
            link_to_media='https://url4.com',
            photo='4.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        self.assertEqual(Achievement.objects.count(), 1)
