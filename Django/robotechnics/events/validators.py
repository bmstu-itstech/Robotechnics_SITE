import re

from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible


@deconstructible
class ValidateFullName:
    def __call__(self, value):
        if re.fullmatch(r'^([А-ЯЁа-яё-]+ ){1,3} ?[А-ЯЁа-яё-]+$',
                        value.strip()) is None:
            raise ValidationError('Некорректное ФИО')


@deconstructible
class ValidateGroup:
    def __call__(self, value):
        if re.fullmatch(r'(^[А-ЯЁа-яё]+)\d{1,2}-\d{2}[А-ЯЁа-яё]{,2}',
                        value.strip()) is None:
            raise ValidationError(
                'Некорректный ввод группы',
            )
