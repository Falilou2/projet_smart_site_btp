from rest_framework.views import APIView
from .login import login_user
from .register import register_user

class LoginAPIView(APIView):
    def post(self, request):
        return login_user(request)

class RegisterAPIView(APIView):
    def post(self, request):
        return register_user(request)