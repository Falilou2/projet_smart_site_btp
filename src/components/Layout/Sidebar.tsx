import React from 'react';
import { 
  HomeIcon, 
  ChartBarIcon, 
  ShoppingBagIcon, 
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const navigation = [
  { id: 'dashboard', name: 'Tableau de Bord', icon: HomeIcon },
  { id: 'projects', name: 'Projets', icon: ClipboardDocumentListIcon },
  { id: 'marketplace', name: 'Marketplace', icon: ShoppingBagIcon },
  { id: 'artisans', name: 'Artisans', icon: UserGroupIcon },
  { id: 'safety', name: 'Sécurité', icon: ShieldCheckIcon },
  { id: 'analytics', name: 'Analytics', icon: ChartBarIcon },
  { id: 'settings', name: 'Paramètres', icon: Cog6ToothIcon },
];

export function Sidebar({ activeTab, onTabChange, isMobile, isOpen, onClose }: SidebarProps) {
  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={clsx(
      'bg-white shadow-lg border-r border-gray-200 flex flex-col',
      isMobile ? 'fixed inset-y-0 left-0 z-50 w-64 transform transition-transform' : 'w-64',
      isMobile && !isOpen && '-translate-x-full'
    )}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <HomeIcon className="w-5 h-5 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-bold text-gray-900">BuildSN</h1>
            <p className="text-xs text-gray-500">Gestion Construction</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={clsx(
                'w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <Icon className={clsx(
                'w-5 h-5 mr-3',
                isActive ? 'text-blue-600' : 'text-gray-400'
              )} />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 text-white text-center">
          <p className="text-sm font-medium">Version 1.0.0</p>
          <p className="text-xs opacity-90">Fait au Sénégal 🇸🇳</p>
        </div>
      </div>
    </div>
  );
}