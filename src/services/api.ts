// API Configuration for Django REST Framework integration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class ApiService {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor() {
    this.baseUrl = API_BASE_URL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('access_token');
    return {
      ...this.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  // Dashboard endpoints
  async getDashboardStats() {
    const response = await fetch(`${this.baseUrl}/dashboard/stats/`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse(response);
  }

  // Projects endpoints
  async getProjects() {
    const response = await fetch(`${this.baseUrl}/projects/`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse(response);
  }

  async createProject(projectData: any) {
    const response = await fetch(`${this.baseUrl}/projects/`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(projectData),
    });
    return this.handleResponse(response);
  }

  async updateProject(id: string, projectData: any) {
    const response = await fetch(`${this.baseUrl}/projects/${id}/`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(projectData),
    });
    return this.handleResponse(response);
  }

  // Marketplace endpoints
  async getProducts(category?: string) {
    const url = category 
      ? `${this.baseUrl}/products/?category=${category}`
      : `${this.baseUrl}/products/`;
    
    const response = await fetch(url, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse(response);
  }

  async createOrder(orderData: any) {
    const response = await fetch(`${this.baseUrl}/orders/`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(orderData),
    });
    return this.handleResponse(response);
  }

  // Artisans endpoints
  async getArtisans() {
    const response = await fetch(`${this.baseUrl}/artisans/`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse(response);
  }

  // Safety endpoints
  async getSafetyReports(projectId?: string) {
    const url = projectId 
      ? `${this.baseUrl}/safety-reports/?project=${projectId}`
      : `${this.baseUrl}/safety-reports/`;
    
    const response = await fetch(url, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse(response);
  }

  async createSafetyReport(reportData: any) {
    const response = await fetch(`${this.baseUrl}/safety-reports/`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(reportData),
    });
    return this.handleResponse(response);
  }

  // Authentication endpoints
  async login(email: string, password: string) {
    const response = await fetch(`${this.baseUrl}/auth/login/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    });
    return this.handleResponse(response);
  }

  async refreshToken(refreshToken: string) {
    const response = await fetch(`${this.baseUrl}/auth/refresh/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ refresh: refreshToken }),
    });
    return this.handleResponse(response);
  }
}

export const apiService = new ApiService();