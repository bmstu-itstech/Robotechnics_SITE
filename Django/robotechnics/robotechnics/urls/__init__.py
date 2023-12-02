from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title='Robotechnics Site',
        default_version='v0',
        description='API сайта',
    ),
    patterns=[path('api/v0/', include('robotechnics.urls.api')),],
    public=True,
    permission_classes=[permissions.AllowAny,],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v0/', include('robotechnics.urls.api')),
]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        path('__debug__', include(debug_toolbar.urls)),
        path('api/swagger/', TemplateView.as_view(
            template_name='swagger/swagger.html',
            extra_context={'schema_url': 'openapi-schema'}
            ), name='swagger'
        ),
        path(
            'api/swagger<format>/', schema_view.without_ui(cache_timeout=0),
            name='schema-json'
        ),
    ]

    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
