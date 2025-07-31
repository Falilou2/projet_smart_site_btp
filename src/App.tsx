import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './components/Landing/LandingPage';
import { LoginPage } from './components/Auth/LoginPage';
import { RegisterPage } from './components/Auth/RegisterPage';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { DashboardView } from './components/Dashboard/DashboardView';
import { ProjectsView } from './components/Projects/ProjectsView';
import { MarketplaceView } from './components/Marketplace/MarketplaceView';
import { ArtisansView } from './components/Artisans/ArtisansView';
import { SafetyView } from './components/Safety/SafetyView';

const tabTitles = {
  dashboard: 'Tableau de Bord',
  projects: 'Gestion des Projets',
  marketplace: 'Marketplace',
  artisans: 'Gestion des Artisans',
  safety: 'Sécurité des Chantiers',
  analytics: 'Analytics',
  settings: 'Paramètres',
};

function AppContent() {
  const { isAuthenticated, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'register'>('landing');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    switch (currentPage) {
      case 'login':
        return (
          <LoginPage
            onSwitchToRegister={() => setCurrentPage('register')}
            onSwitchToLanding={() => setCurrentPage('landing')}
          />
        );
      case 'register':
        return (
          <RegisterPage
            onSwitchToLogin={() => setCurrentPage('login')}
            onSwitchToLanding={() => setCurrentPage('landing')}
          />
        );
      default:
        return (
          <LandingPage
            onSwitchToLogin={() => setCurrentPage('login')}
            onSwitchToRegister={() => setCurrentPage('register')}
          />
        );
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'projects':
        return <ProjectsView />;
      case 'marketplace':
        return <MarketplaceView />;
      case 'artisans':
        return <ArtisansView />;
      case 'safety':
        return <SafetyView />;
      case 'analytics':
        return (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600">Module d'analytics en développement</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">⚙️</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Paramètres</h3>
            <p className="text-gray-600">Configuration et paramètres de l'application</p>
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          isMobile={true}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          title={tabTitles[activeTab as keyof typeof tabTitles]}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;