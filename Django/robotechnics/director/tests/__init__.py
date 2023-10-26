from django.test import TestCase
from director.models import Director  # noqa: F401
from django.core.exceptions import ValidationError


class DirectorTestCase(TestCase):
    def setUp(self):
        Director.objects.create(
            name='director1',
            email='abc@mail.ru',
            post='post1',
            image='1.png',
        ).save()

    def test_create_good(self):
        item = Director.objects.create(
            name='director2',
            email='abc2@mail.ru',
            post='post2',
            image='2.png',
        )
        item.full_clean()
        item.save()
        self.assertEqual(Director.objects.count(), 2)

    def test_create_bad(self):
        item = Director.objects.create(
            name='director3',
            email='mail.ru',
            post='post3',
            image='3.png',
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
            image='4.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = Director.objects.create(
            name='director5',
            email='abc5@mail.ru',
            image='5.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        self.assertEqual(Director.objects.count(), 1)
