# Generated by Django 4.2.6 on 2023-11-12 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('partners', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='partner',
            old_name='name',
            new_name='title',
        ),
    ]