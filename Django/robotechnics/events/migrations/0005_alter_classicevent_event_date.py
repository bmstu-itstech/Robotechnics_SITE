# Generated by Django 4.2.6 on 2023-11-16 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_classicevent_event_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classicevent',
            name='event_date',
            field=models.DateField(verbose_name='дата проведения'),
        ),
    ]