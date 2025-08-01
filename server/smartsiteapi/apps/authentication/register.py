from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from .firebaseAuth import firebase_register_user

class RegisterAPIView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = firebase_register_user(email, password)
            if user:
                return Response({"message": "Registration successful", "uid": user.uid, "email": user.email}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": "Registration failed. Email may already be in use or invalid."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)