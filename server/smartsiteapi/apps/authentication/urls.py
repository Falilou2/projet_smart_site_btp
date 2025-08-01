from django.urls import path, include
from .api_urls import urlpatterns as api_urlpatterns

urlpatterns = [
    path('auth/', include((api_urlpatterns, 'authentication'))),
    # autres urls...
]
