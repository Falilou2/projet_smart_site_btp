import React from 'react';
import { 
  StarIcon,
  MapPinIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { Artisan } from '../../types';

interface ArtisanCardProps {
  artisan: Artisan;
}

export function ArtisanCard({ artisan }: ArtisanCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarIconSolid key={i} className="w-4 h-4 text-yellow-400" />
        ) : (
          <StarIcon key={i} className="w-4 h-4 text-gray-300" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {artisan.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900">{artisan.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{artisan.specialty}</p>
          </div>
        </div>
        
        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
          artisan.available 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {artisan.available ? 'Disponible' : 'Occupé'}
        </span>
      </div>

      {/* Rating and Experience */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex items-center">
            {renderStars(Math.floor(artisan.rating))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({artisan.rating})</span>
        </div>
        
        <div className="text-sm text-gray-600">
          {artisan.experience} ans d'exp.
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
        {artisan.location}
      </div>

      {/* Certifications */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <CheckBadgeIcon className="w-4 h-4 text-green-500 mr-2" />
          <span className="text-sm font-medium text-gray-900">Certifications</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {artisan.certifications.map((cert, index) => (
            <span
              key={index}
              className="inline-flex px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <button 
          className={`flex-1 flex items-center justify-center px-3 py-2 rounded-lg font-medium transition-colors ${
            artisan.available
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!artisan.available}
        >
          <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
          Contacter
        </button>
        
        <button className="px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
          <PhoneIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}