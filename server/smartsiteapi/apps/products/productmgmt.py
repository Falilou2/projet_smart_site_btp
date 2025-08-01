from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.database.db_utils import add_product, update_product, delete_product
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from apps.authentication.jwt_utils import verify_jwt

@method_decorator(csrf_exempt, name='dispatch')
class ProductManagementView(APIView):
    """Protected: Add, update, delete products (requires Firebase JWT)"""

    def post(self, request):
        if not verify_jwt(request):
            return Response({'detail': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        data = request.data
        product_id = data.get('id')
        if not product_id:
            return Response({'detail': 'Product ID required'}, status=status.HTTP_400_BAD_REQUEST)
        add_product(product_id, data)
        return Response({'detail': 'Product added'}, status=status.HTTP_201_CREATED)

    def put(self, request, product_id):
        if not verify_jwt(request):
            return Response({'detail': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        data = request.data
        update_product(product_id, data)
        return Response({'detail': 'Product updated'}, status=status.HTTP_200_OK)

    def delete(self, request, product_id):
        if not verify_jwt(request):
            return Response({'detail': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        delete_product(product_id)
        return Response({'detail': 'Product deleted'}, status=status.HTTP_204_NO_CONTENT)
