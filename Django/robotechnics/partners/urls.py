from django.urls import path
from partners.router import PartnerViewSet

app_name = 'partners'
urlpatterns = [
    path('', PartnerViewSet.as_view())
]
