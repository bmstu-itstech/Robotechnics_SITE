from director.router import router  # noqa: F401
from django.urls import include, path

app_name = 'director'
urlpatterns = [
    path('', include(router.urls))
]
