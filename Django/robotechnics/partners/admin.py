from django.contrib import admin
from partners.forms import PartnerForm
from partners.models import Partner


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = (
        'small_photo_tmb',
        'title',
        'link_to_the_site',
    )
    list_display_links = ('title', 'small_photo_tmb')
    readonly_fields = ('photo_tmb',)
    form = PartnerForm
