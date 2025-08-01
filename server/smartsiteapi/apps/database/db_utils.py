from .firestore_client import firestore_db
from google.cloud.firestore_v1.base_document import DocumentSnapshot
from typing import Any, Dict, Optional, List

#------------PRODUCT QUERIES---------
#------------------------------------
def add_product(product_id: str, data: dict) -> None:
    firestore_db.collection('products').document(product_id).set(data)

def add_product_auto(data: dict) -> str:
    doc_ref = firestore_db.collection('products').add(data)
    return doc_ref[1].id

def get_product_by_id(product_id: str) -> dict | None:
    doc = firestore_db.collection('products').document(product_id).get()
    if doc.exists:
        return doc.to_dict()
    return None

def get_all_products() -> list[dict]:
    docs = firestore_db.collection('products').stream()
    return [doc.to_dict() for doc in docs]

def update_product(product_id: str, data: dict) -> None:
    firestore_db.collection('products').document(product_id).update(data)

def delete_product(product_id: str) -> None:
    firestore_db.collection('products').document(product_id).delete()

#------------PROJECT QUERIES---------
#------------------------------------
def add_project(project_id: str, data: dict) -> None:
    firestore_db.collection('projects').document(project_id).set(data)

def add_project_auto(data: dict) -> str:
    doc_ref = firestore_db.collection('projects').add(data)
    return doc_ref[1].id

def get_project_by_id(project_id: str) -> dict | None:
    doc = firestore_db.collection('projects').document(project_id).get()
    if doc.exists:
        return doc.to_dict()
    return None

def get_all_projects() -> list[dict]:
    docs = firestore_db.collection('projects').stream()
    return [doc.to_dict() for doc in docs]

def update_project(project_id: str, data: dict) -> None:
    firestore_db.collection('projects').document(project_id).update(data)

def delete_project(project_id: str) -> None:
    firestore_db.collection('projects').document(project_id).delete()

#------------ARTISAN QUERIES---------
#------------------------------------
def add_artisan(artisan_id: str, data: dict) -> None:
    firestore_db.collection('artisans').document(artisan_id).set(data)

def add_artisan_auto(data: dict) -> str:
    doc_ref = firestore_db.collection('artisans').add(data)
    return doc_ref[1].id

def get_artisan_by_id(artisan_id: str) -> dict | None:
    doc = firestore_db.collection('artisans').document(artisan_id).get()
    if doc.exists:
        return doc.to_dict()
    return None

def get_all_artisans() -> list[dict]:
    docs = firestore_db.collection('artisans').stream()
    return [doc.to_dict() for doc in docs]

def update_artisan(artisan_id: str, data: dict) -> None:
    firestore_db.collection('artisans').document(artisan_id).update(data)

def delete_artisan(artisan_id: str) -> None:
    firestore_db.collection('artisans').document(artisan_id).delete()

#--------SAFETY REPORT QUERIES-------
#------------------------------------
def add_safety_report(report_id: str, data: dict) -> None:
    firestore_db.collection('safetyReports').document(report_id).set(data)

def add_safety_report_auto(data: dict) -> str:
    doc_ref = firestore_db.collection('safetyReports').add(data)
    return doc_ref[1].id

def get_safety_report_by_id(report_id: str) -> dict | None:
    doc = firestore_db.collection('safetyReports').document(report_id).get()
    if doc.exists:
        return doc.to_dict()
    return None

def get_all_safety_reports() -> list[dict]:
    docs = firestore_db.collection('safetyReports').stream()
    return [doc.to_dict() for doc in docs]

def update_safety_report(report_id: str, data: dict) -> None:
    firestore_db.collection('safetyReports').document(report_id).update(data)

def delete_safety_report(report_id: str) -> None:
    firestore_db.collection('safetyReports').document(report_id).delete()

#----------DASHBOARD QUERIES---------
#------------------------------------
def get_dashboard_stats() -> dict | None:
    # Assuming dashboardStats is a single document with id 'main' in 'dashboardStats' collection
    doc = firestore_db.collection('dashboardStats').document('main').get()
    if doc.exists:
        return doc.to_dict()
    return None

def set_dashboard_stats(data: dict) -> None:
    firestore_db.collection('dashboardStats').document('main').set(data)
