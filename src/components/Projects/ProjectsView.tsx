import React, { useState } from 'react';
import { PlusIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/mockData';
import { Project } from '../../types';

export function ProjectsView() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleFilterChange = (status: string) => {
    setStatusFilter(status);
    if (status === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.status === status));
    }
  };

  const statusOptions = [
    { value: 'all', label: 'Tous les projets' },
    { value: 'planning', label: 'Planification' },
    { value: 'in-progress', label: 'En cours' },
    { value: 'completed', label: 'Terminés' },
    { value: 'on-hold', label: 'En attente' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion des Projets</h2>
          <p className="text-gray-600">Suivez et gérez tous vos projets de construction</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={statusFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FunnelIcon className="w-4 h-4 mr-2" />
            Filtres
          </button>
          
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <PlusIcon className="w-4 h-4 mr-2" />
            Nouveau Projet
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FunnelIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun projet trouvé</h3>
          <p className="text-gray-600">Aucun projet ne correspond aux filtres sélectionnés.</p>
        </div>
      )}
    </div>
  );
}