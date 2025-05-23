import React from 'react';
import { Product } from '../../types/product';
import ProductCard from './ProductCard';
import Loader from '../ui/Loader';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="lg" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to load products</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }
  
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your filters</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;