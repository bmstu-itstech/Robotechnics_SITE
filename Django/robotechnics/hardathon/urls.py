from django.urls import include, path
from hardathon.router import (router_detail_project, router_hardathon,
                              router_hardathon_partners,
                              router_hardathon_projects)

urlpatterns = [
    path('hardathon/', include(router_hardathon.urls)),
    path('project/', include(router_detail_project.urls)),
    path('projects/', include(router_hardathon_projects.urls)),
    path('get_event_partners/', include(router_hardathon_partners.urls)),
]
