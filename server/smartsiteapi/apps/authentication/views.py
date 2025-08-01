from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer
from .firebaseAuth import firebase_login_user

class LoginAPIView(APIView):

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            # Firebase Admin SDK does not support password login, so return error
            return Response({"error": "Login with password must be handled via Firebase REST API or client SDK."}, status=status.HTTP_501_NOT_IMPLEMENTED)

        # Validation errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
