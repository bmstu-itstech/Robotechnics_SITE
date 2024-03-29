from director.models import Director  # noqa: F401
from django.core.exceptions import ValidationError
from django.test import TestCase


class DirectorTestCase(TestCase):
    def setUp(self):
        Director.objects.create(
            name='director1',
            email='abc@mail.ru',
            post='post1',
            photo='1.png',
        ).save()

    def tearDown(self):
        Director.objects.all().delete()
        super().tearDown()

    def test_create_good(self):
        item = Director.objects.create(
            name='director2',
            email='abc2@mail.ru',
            post='post2',
            photo='2.png',
        )
        item.full_clean()
        item.save()
        self.assertEqual(Director.objects.count(), 2)

    def test_create_bad(self):
        item = Director.objects.create(
            name='director3',
            email='mail.ru',
            post='post3',
            photo='3.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = Director.objects.create(
            name='director4',
            email='abc4',
            post='post4',
            photo='4.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = Director.objects.create(
            name='director5',
            email='abc5@mail.ru',
            photo='5.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        self.assertEqual(Director.objects.count(), 1)
