import React from 'react';
import { 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { SafetyReport } from '../../types';
import { formatDate } from '../../utils/formatters';

interface SafetyCardProps {
  report: SafetyReport;
}

export function SafetyCard({ report }: SafetyCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'incident':
        return <ExclamationTriangleIcon className="w-5 h-5" />;
      case 'inspection':
        return <ShieldCheckIcon className="w-5 h-5" />;
      case 'training':
        return <ClipboardDocumentCheckIcon className="w-5 h-5" />;
      default:
        return <ShieldCheckIcon className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'incident':
        return 'text-red-600 bg-red-100';
      case 'inspection':
        return 'text-blue-600 bg-blue-100';
      case 'training':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'Haute';
      case 'medium':
        return 'Moyenne';
      case 'low':
        return 'Faible';
      default:
        return severity;
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'incident':
        return 'Incident';
      case 'inspection':
        return 'Inspection';
      case 'training':
        return 'Formation';
      default:
        return type;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(report.type)}`}>
            {getTypeIcon(report.type)}
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900">{getTypeText(report.type)}</h3>
            <p className="text-sm text-gray-600">Projet #{report.projectId}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(report.severity)}`}>
            {getSeverityText(report.severity)}
          </span>
          
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            report.resolved 
              ? 'bg-green-100 text-green-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {report.resolved ? (
              <>
                <CheckCircleIcon className="w-3 h-3 mr-1" />
                Résolu
              </>
            ) : (
              <>
                <ClockIcon className="w-3 h-3 mr-1" />
                En cours
              </>
            )}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-3">{report.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{formatDate(report.date)}</span>
        
        <div className="flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Voir détails
          </button>
          {!report.resolved && (
            <button className="text-green-600 hover:text-green-700 font-medium">
              Marquer résolu
            </button>
          )}
        </div>
      </div>
    </div>
  );
}