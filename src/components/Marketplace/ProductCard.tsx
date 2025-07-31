import React from 'react';
import { 
  StarIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { Product } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? (
              <>
                <CheckCircleIcon className="w-3 h-3 mr-1" />
                En stock
              </>
            ) : (
              <>
                <XCircleIcon className="w-3 h-3 mr-1" />
                Rupture
              </>
            )}
          </span>
        </div>
        
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-lg text-xs font-medium text-white ${
            product.category === 'materials' 
              ? 'bg-blue-600' 
              : 'bg-orange-600'
          }`}>
            {product.category === 'materials' ? 'Matériau' : 'Équipement'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars(Math.floor(product.rating))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{product.supplier}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatCurrency(product.price)}
            </span>
            <span className="text-sm text-gray-600 ml-1">/ {product.unit}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button 
            className={`flex-1 flex items-center justify-center px-3 py-2 rounded-lg font-medium transition-colors ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCartIcon className="w-4 h-4 mr-2" />
            {product.category === 'materials' ? 'Acheter' : 'Louer'}
          </button>
          
          <button className="px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
            Détails
          </button>
        </div>
      </div>
    </div>
  );
}