import React from 'react';
import { 
  ClipboardDocumentListIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const activities = [
  {
    id: 1,
    type: 'project',
    title: 'Nouveau projet créé',
    description: 'Centre Commercial Dakar Plaza',
    time: 'Il y a 2 heures',
    icon: ClipboardDocumentListIcon,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    id: 2,
    type: 'order',
    title: 'Commande livrée',
    description: '50 sacs de ciment Portland',
    time: 'Il y a 4 heures',
    icon: ShoppingBagIcon,
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 3,
    type: 'artisan',
    title: 'Nouvel artisan inscrit',
    description: 'Mamadou Ndiaye - Maçonnerie',
    time: 'Il y a 1 jour',
    icon: UserGroupIcon,
    color: 'text-purple-600 bg-purple-100'
  },
  {
    id: 4,
    type: 'safety',
    title: 'Rapport de sécurité',
    description: 'Inspection terminée avec succès',
    time: 'Il y a 2 jours',
    icon: ShieldCheckIcon,
    color: 'text-orange-600 bg-orange-100'
  }
];

export function RecentActivities() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Activités Récentes</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Voir tout
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${activity.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
          Voir toutes les activités
        </button>
      </div>
    </div>
  );
}