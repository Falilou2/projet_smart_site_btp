from django.urls import path
from .products import ProductListView, ProductDetailView
from .productmgmt import ProductManagementView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('<str:product_id>/', ProductDetailView.as_view(), name='product-detail'),
    path('manage/', ProductManagementView.as_view(), name='product-manage'),
    path('manage/<str:product_id>/', ProductManagementView.as_view(), name='product-manage-detail'),
]
