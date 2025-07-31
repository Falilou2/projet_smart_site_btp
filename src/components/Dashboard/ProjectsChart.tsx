import React from 'react';
import { projects } from '../../data/mockData';
import { getStatusColor, getStatusText, formatCurrency } from '../../utils/formatters';

export function ProjectsChart() {
  const statusCounts = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Projets en Cours</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Voir tout
        </button>
      </div>

      <div className="space-y-4">
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{project.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span>{project.location}</span>
                <span className="mx-2">•</span>
                <span>{project.manager}</span>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progression</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Budget: {formatCurrency(project.budget)}
                </span>
                <span className="text-green-600 font-medium">
                  Dépensé: {formatCurrency(project.spent)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}