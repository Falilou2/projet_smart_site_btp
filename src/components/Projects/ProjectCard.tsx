import React from 'react';
import { 
  CalendarDaysIcon,
  MapPinIcon,
  UserIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { Project } from '../../types';
import { getStatusColor, getStatusText, formatCurrency, formatDate } from '../../utils/formatters';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progressPercentage = (project.spent / project.budget) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Progression</span>
          <span className="font-medium text-gray-900">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
          {project.location}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
          {project.manager}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <CalendarDaysIcon className="w-4 h-4 mr-2 text-gray-400" />
          {formatDate(project.startDate)} - {formatDate(project.endDate)}
        </div>
      </div>

      {/* Budget */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Budget</span>
          <span className="text-sm font-medium text-gray-900">
            {formatCurrency(project.budget)}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Dépensé</span>
          <span className="text-sm font-medium text-green-600">
            {formatCurrency(project.spent)}
          </span>
        </div>
        
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Voir détails
        </button>
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Modifier
        </button>
      </div>
    </div>
  );
}