from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.database.db_utils import get_all_products, get_product_by_id

class ProductListView(APIView):
    """Public: List all products"""
    def get(self, request):
        products = get_all_products()
        return Response(products, status=status.HTTP_200_OK)

class ProductDetailView(APIView):
    """Public: Get product by ID"""
    def get(self, request, product_id):
        product = get_product_by_id(product_id)
        if product:
            return Response(product, status=status.HTTP_200_OK)
        return Response({'detail': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
