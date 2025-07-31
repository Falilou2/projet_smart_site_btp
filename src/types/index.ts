export interface Project {
  id: string;
  name: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  progress: number;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  location: string;
  manager: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'materials' | 'equipment';
  price: number;
  unit: string;
  image: string;
  inStock: boolean;
  supplier: string;
  rating: number;
}

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  certifications: string[];
  available: boolean;
  location: string;
}

export interface SafetyReport {
  id: string;
  projectId: string;
  type: 'incident' | 'inspection' | 'training';
  severity: 'low' | 'medium' | 'high';
  description: string;
  date: string;
  resolved: boolean;
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalBudget: number;
  monthlyRevenue: number;
  safetyScore: number;
  artisansCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'artisan' | 'client';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}