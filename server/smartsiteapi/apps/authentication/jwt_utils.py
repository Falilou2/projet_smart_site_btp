import firebase_admin
from firebase_admin import auth
from django.conf import settings

if not firebase_admin._apps:
    firebase_admin.initialize_app()

def verify_jwt(request) -> bool:
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return False
    token = auth_header.split(' ')[1]
    try:
        decoded_token = auth.verify_id_token(token)
        request.user = decoded_token  # Attach user info to request
        return True
    except Exception:
        return False
