import React, { useState } from 'react';
import { 
  PlusIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import { SafetyCard } from './SafetyCard';
import { SafetyStats } from './SafetyStats';
import { safetyReports } from '../../data/mockData';
import { SafetyReport } from '../../types';

export function SafetyView() {
  const [reports] = useState<SafetyReport[]>(safetyReports);

  const stats = {
    totalReports: reports.length,
    resolved: reports.filter(r => r.resolved).length,
    pending: reports.filter(r => !r.resolved).length,
    highSeverity: reports.filter(r => r.severity === 'high').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sécurité des Chantiers</h2>
          <p className="text-gray-600">Gérez la sécurité et les incidents sur vos chantiers</p>
        </div>
        
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-4 h-4 mr-2" />
          Nouveau Rapport
        </button>
      </div>

      {/* Stats */}
      <SafetyStats stats={stats} />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors">
          <ShieldCheckIcon className="w-8 h-8 text-green-600 mr-3" />
          <div className="text-left">
            <p className="font-medium text-green-900">Inspection de Sécurité</p>
            <p className="text-sm text-green-700">Programmer une inspection</p>
          </div>
        </button>
        
        <button className="flex items-center p-4 bg-orange-50 border border-orange-200 rounded-xl hover:bg-orange-100 transition-colors">
          <ExclamationTriangleIcon className="w-8 h-8 text-orange-600 mr-3" />
          <div className="text-left">
            <p className="font-medium text-orange-900">Signaler un Incident</p>
            <p className="text-sm text-orange-700">Déclarer un incident</p>
          </div>
        </button>
        
        <button className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
          <ClipboardDocumentCheckIcon className="w-8 h-8 text-blue-600 mr-3" />
          <div className="text-left">
            <p className="font-medium text-blue-900">Formation Sécurité</p>
            <p className="text-sm text-blue-700">Organiser une formation</p>
          </div>
        </button>
      </div>

      {/* Reports */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rapports Récents</h3>
        <div className="space-y-4">
          {reports.map((report) => (
            <SafetyCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
}