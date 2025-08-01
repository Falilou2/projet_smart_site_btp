import os
import yaml
from google.cloud import firestore

# Load Firebase config from .env.yaml
with open(os.path.join(os.path.dirname(__file__), '../../.env.yaml'), 'r') as f:
    config = yaml.safe_load(f)

# Path to your service account key (update this path as needed)
SERVICE_ACCOUNT_PATH = os.path.join(
    os.path.dirname(__file__), '..\\..\\..\\htechbtp-7f597-firebase-adminsdk-fbsvc-d74c398155.json'
)

# Initialize Firestore client
firestore_db = firestore.Client.from_service_account_json(SERVICE_ACCOUNT_PATH)

