import pyrebase
import os
import yaml
import firebase_admin

# Ensure Firebase Admin is initialized somewhere in your project, e.g. in a startup file or here:
if not firebase_admin._apps:
    firebase_admin.initialize_app()

# Load Firebase config from .env.yaml
with open(os.path.join(os.path.dirname(__file__), '../../.env.yaml'), 'r') as f:
    config = yaml.safe_load(f)

firebaseConfig = {
    "apiKey": config["FIREBASE_API_KEY"],
    "authDomain": config["FIREBASE_AUTH_DOMAIN"],
    "projectId": config["FIREBASE_PROJECT_ID"],
    "storageBucket": config["FIREBASE_STORAGE_BUCKET"],
    "messagingSenderId": config["FIREBASE_MESSAGING_SENDER_ID"],
    "appId": config["FIREBASE_APP_ID"],
    "measurementId": config["FIREBASE_MEASUREMENT_ID"],
    "databaseURL": config.get("FIREBASE_DATABASE_URL", "")
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

def firebase_register_user(email, password):
    try:
        user = auth.create_user_with_email_and_password(email, password)
        return user
    except Exception as e:
        return None

def firebase_login_user(email, password):
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        return user
    except Exception as e:
        return None
