import re
import jwt
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import LoginSerializer
from .firebaseAuth import firebase_login_user

def sanitize_email(email):
    return re.sub(r'[^a-zA-Z0-9@._+-]', '', email)

def sanitize_password(password):
    return re.sub(r'[^a-zA-Z0-9!@#$%^&*()_+=-]', '', password)

def login_user(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        email = sanitize_email(serializer.validated_data['email'])
        password = sanitize_password(serializer.validated_data['password'])
        user = firebase_login_user(email, password)
        if user:
            payload = {"email": email, "localId": user.get("localId", None)}
            token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
            response = Response({
                "message": "Login successful",
                "email": user.get("email")
            }, status=status.HTTP_200_OK)
            response['Authorization'] = f'Bearer {token}'
            return response
        return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
