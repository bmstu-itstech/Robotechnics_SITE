from django.urls import path, include
from hardathon.router import router, router2, router3, router4  # noqa: F401


urlpatterns = [
    path('hardatons/', include(router.urls)),
    path('project/', include(router2.urls)),
    path('projects/', include(router3.urls)),
    path('get_event_partners/', include(router4.urls)),
]
