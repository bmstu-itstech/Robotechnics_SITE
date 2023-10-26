from django.test import TestCase
from news.models import News  # noqa: F401
from django.core.exceptions import ValidationError


class NewsTestCase(TestCase):
    def setUp(self):
        News.objects.create(
            name='news1',
            description='description1',
            link_to_news='https://url.com',
            image='1.png',
        ).save()

    def test_create_good(self):
        item = News.objects.create(
            name='news2',
            description='description2',
            link_to_news='https://url.com',
            image='2.png',
        )
        item.full_clean()
        item.save()
        self.assertEqual(News.objects.count(), 2)

    def test_create_bad(self):
        item = News.objects.create(
            name='news3',
            description='description3',
            link_to_news='https://url',
            image='3.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = News.objects.create(
            description='description4',
            link_to_news='https://url.com',
            image='4.png',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        self.assertEqual(News.objects.count(), 1)
