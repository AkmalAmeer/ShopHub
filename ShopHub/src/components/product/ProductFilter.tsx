import React, { useState } from 'react';
import { FilterState } from '../../types/product';
import { X, SlidersHorizontal } from 'lucide-react';
import Button from '../ui/Button';
import Rating from '../ui/Rating';

interface ProductFilterProps {
  categories: string[];
  filters: FilterState;
  updateFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
  totalProducts: number;
  filteredCount: number;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  filters,
  updateFilters,
  resetFilters,
  totalProducts,
  filteredCount
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const handleCategoryChange = (category: string) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    updateFilters({ categories: updatedCategories });
  };
  
  const handleRatingChange = (rating: number) => {
    updateFilters({ rating: filters.rating === rating ? null : rating });
  };
  
  const handlePriceChange = (min: number, max: number) => {
    updateFilters({ priceRange: [min, max] });
  };
  
  return (
    <>
      <div className="lg:hidden mb-4">
        <Button 
          variant="outline" 
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
          {filteredCount < totalProducts && (
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
              {filteredCount}/{totalProducts}
            </span>
          )}
        </Button>
      </div>
      
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileFilterOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white p-6 overflow-y-auto transition-transform duration-300 ${
            isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Filters</h2>
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`mobile-category-${category}`}
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`mobile-category-${category}`}
                      className="ml-2 text-sm text-gray-700 capitalize"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${
                      filters.priceRange[1] <= 50 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handlePriceChange(0, 50)}
                  >
                    Under $50
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${
                      filters.priceRange[0] >= 50 && filters.priceRange[1] <= 100
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handlePriceChange(50, 100)}
                  >
                    $50 - $100
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${
                      filters.priceRange[0] >= 100
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handlePriceChange(100, 1000)}
                  >
                    $100+
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    className={`flex items-center px-3 py-2 w-full rounded-md transition-colors ${
                      filters.rating === rating
                        ? 'bg-blue-100' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Rating value={rating} showCount={false} />
                    <span className="ml-2 text-sm text-gray-700">& Up</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                onClick={resetFilters} 
                fullWidth
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block w-60 flex-shrink-0">
        <div className="sticky top-20 overflow-y-auto pb-6">
          <h2 className="sr-only">Filters</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`category-${category}`}
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm text-gray-700 capitalize"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md text-left ${
                      filters.priceRange[1] <= 50 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handlePriceChange(0, 50)}
                  >
                    Under $50
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md text-left ${
                      filters.priceRange[0] >= 50 && filters.priceRange[1] <= 100
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handlePriceChange(50, 100)}
                  >
                    $50 - $100
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md text-left ${
                      filters.priceRange[0] >= 100
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handlePriceChange(100, 1000)}
                  >
                    $100+
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    className={`flex items-center px-3 py-2 w-full rounded-md transition-colors text-left ${
                      filters.rating === rating
                        ? 'bg-blue-100' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Rating value={rating} showCount={false} />
                    <span className="ml-2 text-sm text-gray-700">& Up</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                onClick={resetFilters} 
                fullWidth
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;