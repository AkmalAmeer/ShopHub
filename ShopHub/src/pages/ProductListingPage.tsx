import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import ProductSort from '../components/product/ProductSort';
import { useProducts } from '../hooks/useProducts';

const ProductListingPage: React.FC = () => {
  const { 
    products, 
    allProducts,
    categories, 
    loading, 
    error,
    filters,
    sortOption,
    updateFilters,
    updateSort,
    resetFilters
  } = useProducts();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero banner */}
        <div className="bg-blue-600 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">DISCOVER OUR PRODUCTS</h1>
            <p className="text-blue-100 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
              Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Top bar with product count and sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-medium text-gray-900">All Products</h2>
              <p className="text-sm text-gray-600">
                {loading ? 'Loading products...' : `Showing ${products.length} of ${allProducts.length} products`}
              </p>
            </div>
            
            <ProductSort 
              currentSort={sortOption} 
              onSortChange={updateSort} 
            />
          </div>
          
          {/* Product grid with sidebar */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <ProductFilter 
              categories={categories}
              filters={filters}
              updateFilters={updateFilters}
              resetFilters={resetFilters}
              totalProducts={allProducts.length}
              filteredCount={products.length}
            />
            
            {/* Products */}
            <div className="flex-1">
              <ProductGrid 
                products={products} 
                loading={loading} 
                error={error} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductListingPage;