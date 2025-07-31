import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { ArtisanCard } from './ArtisanCard';
import { artisans } from '../../data/mockData';
import { Artisan } from '../../types';

export function ArtisansView() {
  const [filteredArtisans, setFilteredArtisans] = useState<Artisan[]>(artisans);
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    filterArtisans(term, availabilityFilter);
  };

  const handleAvailabilityChange = (availability: string) => {
    setAvailabilityFilter(availability);
    filterArtisans(searchTerm, availability);
  };

  const filterArtisans = (search: string, availability: string) => {
    let filtered = artisans;
    
    if (search) {
      filtered = filtered.filter(artisan => 
        artisan.name.toLowerCase().includes(search.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(search.toLowerCase()) ||
        artisan.location.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (availability !== 'all') {
      const isAvailable = availability === 'available';
      filtered = filtered.filter(artisan => artisan.available === isAvailable);
    }
    
    setFilteredArtisans(filtered);
  };

  const availabilityOptions = [
    { value: 'all', label: 'Tous' },
    { value: 'available', label: 'Disponibles' },
    { value: 'unavailable', label: 'Occupés' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion des Artisans</h2>
          <p className="text-gray-600">Trouvez et gérez vos artisans qualifiés</p>
        </div>
        
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <UserPlusIcon className="w-4 h-4 mr-2" />
          Ajouter Artisan
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, spécialité ou localisation..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={availabilityFilter}
          onChange={(e) => handleAvailabilityChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {availabilityOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
          <FunnelIcon className="w-4 h-4 mr-2" />
          Filtres avancés
        </button>
      </div>

      {/* Artisans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtisans.map((artisan) => (
          <ArtisanCard key={artisan.id} artisan={artisan} />
        ))}
      </div>

      {/* Empty state */}
      {filteredArtisans.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <UserPlusIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun artisan trouvé</h3>
          <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
        </div>
      )}
    </div>
  );
}