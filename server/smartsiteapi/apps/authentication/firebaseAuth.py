import firebase_admin
from firebase_admin import auth, credentials
import os
import yaml

# Load Firebase config from .env.yaml
with open(os.path.join(os.path.dirname(__file__), '../../.env.yaml'), 'r') as f:
    config = yaml.safe_load(f)

# For Admin SDK, you need service account fields. If not present, skip admin init.
if all(k in config for k in [
    "FIREBASE_PROJECT_ID",
    "FIREBASE_PRIVATE_KEY_ID",
    "FIREBASE_PRIVATE_KEY",
    "FIREBASE_CLIENT_EMAIL",
    "FIREBASE_CLIENT_ID",
    "FIREBASE_CLIENT_CERT_URL"
]):
    cred = credentials.Certificate({
        "type": "service_account",
        "project_id": config["FIREBASE_PROJECT_ID"],
        "private_key_id": config["FIREBASE_PRIVATE_KEY_ID"],
        "private_key": config["FIREBASE_PRIVATE_KEY"].replace('\\n', '\n'),
        "client_email": config["FIREBASE_CLIENT_EMAIL"],
        "client_id": config["FIREBASE_CLIENT_ID"],
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": config["FIREBASE_CLIENT_CERT_URL"]
    })
    if not firebase_admin._apps:
        firebase_admin.initialize_app(cred)
else:
    cred = None  # Not available, only client config present

# Registration (Admin SDK)
def firebase_register_user(email, password):
    if cred is None:
        raise RuntimeError("Service account credentials not configured for registration.")
    try:
        user = auth.create_user(email=email, password=password)
        return user
    except Exception as e:
        return None

# Login (Client SDK/REST API required)
def firebase_login_user(email, password):
    raise NotImplementedError("Login with password must be handled via Firebase REST API or client SDK.")
