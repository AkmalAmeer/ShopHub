import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { SortOption } from '../../types/product';

interface ProductSortProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const ProductSort: React.FC<ProductSortProps> = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low-to-high', label: 'Price: Low to High' },
    { value: 'price-high-to-low', label: 'Price: High to Low' },
    { value: 'highest-rated', label: 'Highest Rated' }
  ];
  
  const getCurrentSortLabel = () => {
    return sortOptions.find(option => option.value === currentSort)?.label || 'Sort';
  };
  
  const handleSort = (sort: SortOption) => {
    onSortChange(sort);
    setIsOpen(false);
  };
  
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Sort: {getCurrentSortLabel()}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {sortOptions.map(option => (
              <li key={option.value}>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentSort === option.value 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleSort(option.value)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSort;