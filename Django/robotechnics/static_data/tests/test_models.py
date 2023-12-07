from django.core.exceptions import ValidationError
from django.test import TestCase
from static_data.models import StaticData  # noqa: F401


class StaticDataTestCase(TestCase):
    def setUp(self):
        StaticData.objects.create(
            address='address1',
            phone='+79999999999',
            email='abc@example.com',
            link_to_driving_scheme='https://url.com',
            link_to_vk='https://url.com',
            link_to_telegram='https://url.com',
        ).save()

    def tearDown(self):
        StaticData.objects.all().delete()
        super().tearDown()

    def test_create_good(self):
        item = StaticData.objects.create(
            address='address2',
            phone='+79999999999',
            email='abc@example.com',
            link_to_driving_scheme='https://url.com',
            link_to_vk='https://url.com',
            link_to_telegram='https://url.com',
        )
        item.full_clean()
        item.save()
        self.assertEqual(StaticData.objects.count(), 2)

    def test_create_bad(self):
        item = StaticData.objects.create(
            address='address3',
            phone='+79999999999',
            email='abc@example.com',
            link_to_driving_scheme='https://url.com',
            link_to_vk='https://url.com',
            link_to_telegram='https:/',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = StaticData.objects.create(
            address='address4',
            phone='+79999999999',
            email='abc.com',
            link_to_driving_scheme='https://url.com',
            link_to_vk='https://url.com',
            link_to_telegram='https://url.com',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        item = StaticData.objects.create(
            phone='+79999999999',
            email='adc@example.com',
            link_to_driving_scheme='https://url.com',
            link_to_vk='https://url.com',
            link_to_telegram='https://url.com',
        )
        try:
            item.full_clean()
            item.save()
        except ValidationError:
            item.delete()
        self.assertEqual(StaticData.objects.count(), 1)

    def test_telephone_good(self):
        telephones = [
            '+7(999)999-99-99',
            '+7(999)9999999',
            '+79999999999',
            '+79081235467',
            '+79999999999x99',
            '+16044011234',
            '+1 604 401 1234',
            '+7 999 999 99 99',
            '+7 999999 99 99',
            '+7 999999 9999',
            '+7 9999999999',
        ]
        for telephone in telephones:
            item = StaticData.objects.create(
                address='address',
                phone=telephone,
                email='abc@example.com',
                link_to_driving_scheme='https://url.com',
                link_to_vk='https://url.com',
                link_to_telegram='https://url.com',
            )
            item.full_clean()
            item.save()
        self.assertEqual(StaticData.objects.count(), 1 + len(telephones))

    def test_telephone_bad(self):
        telephones = [
            '+7999999999',
            '9999999999',
            '89999999999',
            '09999999999',
            '+2345678912',
            'text',
            '+7123a231212',
            '-71231231212',
            '+712312312-12',
            '+7123123-12-12',
            '+7123)123-12-12',
            '+7(123123-12-12',
            '7(123)123-12-12',
            '(123)123-12-12',
        ]
        for telephone in telephones:
            item = StaticData.objects.create(
                address='address',
                phone=telephone,
                email='abc@example.com',
                link_to_driving_scheme='https://url.com',
                link_to_vk='https://url.com',
                link_to_telegram='https://url.com',
            )
            try:
                item.full_clean()
                item.save()
            except ValidationError:
                item.delete()
        self.assertEqual(StaticData.objects.count(), 1)
