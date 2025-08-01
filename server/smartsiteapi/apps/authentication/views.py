from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import LoginSerializer
from django.contrib.auth.models import AnonymousUser

# Hardcoded user data (simulate DB)
USER_DATA = {
    "admin1234": "s3cretpassword"
}

class LoginAPIView(APIView):

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            # Check credentials
            if USER_DATA.get(username) == password:
                # Generate JWT token (using AnonymousUser for demo)
                refresh = RefreshToken.for_user(AnonymousUser())
                response = Response({
                    "message": "Login successful",
                    "username": username,
                    "access": str(refresh.access_token),
                    "refresh": str(refresh)
                })
                # Set JWT token in Authorization header (Bearer)
                response['Authorization'] = f'Bearer {str(refresh.access_token)}'
                return response
            else:
                return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

        # Validation errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
