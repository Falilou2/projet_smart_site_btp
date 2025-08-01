import re
import jwt
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import RegisterSerializer
from .firebaseAuth import firebase_register_user

def sanitize_email(email):
    return re.sub(r'[^a-zA-Z0-9@._+-]', '', email)

def sanitize_password(password):
    return re.sub(r'[^a-zA-Z0-9!@#$%^&*()_+=-]', '', password)

def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        email = sanitize_email(serializer.validated_data['email'])
        password = sanitize_password(serializer.validated_data['password'])
        user = firebase_register_user(email, password)
        if user:
            # Create JWT token for the new user
            payload = {"email": email, "localId": user.get("localId")}
            token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
            return Response({
                "message": "Registration successful",
                "email": email,
                #"localId": user.get("localId"),
                #"token": token
            }, status=status.HTTP_201_CREATED)
        return Response({"error": "Registration failed. Email may already be in use or invalid."}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)