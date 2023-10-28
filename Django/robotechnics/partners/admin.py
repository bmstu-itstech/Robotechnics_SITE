from django.contrib import admin
from partners.models import Partner


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = (
        'small_image_tmb',
        'name',
        'link_to_the_site',
    )
    readonly_fields = ('image_tmb',)
