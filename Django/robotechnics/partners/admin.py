from django.contrib import admin
from partners.forms import PartnerForm
from partners.models import Partner


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = (
        'small_image_tmb',
        'title',
        'link',
    )
    list_display_links = ('title',)
    readonly_fields = ('image_tmb',)
    form = PartnerForm
