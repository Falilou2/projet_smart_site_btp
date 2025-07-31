import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { ProductCard } from './ProductCard';
import { products } from '../../data/mockData';
import { Product } from '../../types';

export function MarketplaceView() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
    filterProducts(category, searchTerm);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    filterProducts(categoryFilter, term);
  };

  const filterProducts = (category: string, search: string) => {
    let filtered = products;
    
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (search) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.supplier.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  };

  const categories = [
    { value: 'all', label: 'Tout' },
    { value: 'materials', label: 'Matériaux' },
    { value: 'equipment', label: 'Équipements' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketplace</h2>
          <p className="text-gray-600">Achetez des matériaux et louez des équipements</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher des produits..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={categoryFilter}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        
        <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
          <FunnelIcon className="w-4 h-4 mr-2" />
          Filtres avancés
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun produit trouvé</h3>
          <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
        </div>
      )}
    </div>
  );
}