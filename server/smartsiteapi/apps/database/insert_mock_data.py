import json
from firestore_client import firestore_db

# Load mock data from a JSON file (export your mockData.ts as JSON first)
with open('mockData.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Insert projects
for project in data.get('projects', []):
    firestore_db.collection('projects').document(project['id']).set(project)

# Insert products
for product in data.get('products', []):
    firestore_db.collection('products').document(product['id']).set(product)

# Insert artisans
for artisan in data.get('artisans', []):
    firestore_db.collection('artisans').document(artisan['id']).set(artisan)

# Insert safety reports
for report in data.get('safetyReports', []):
    firestore_db.collection('safetyReports').document(report['id']).set(report)

print('Mock data inserted into Firestore.')
