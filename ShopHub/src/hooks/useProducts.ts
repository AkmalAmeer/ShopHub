import { useState, useEffect } from 'react';
import { Product, SortOption, FilterState } from '../types/product';

const API_URL = 'https://fakestoreapi.com/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    rating: null
  });
  
  const [sortOption, setSortOption] = useState<SortOption>('featured');

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map((product: Product) => product.category))];
        setCategories(uniqueCategories);
        
        // Find min and max prices
        const prices = data.map((product: Product) => product.price);
        const minPrice = Math.floor(Math.min(...prices));
        const maxPrice = Math.ceil(Math.max(...prices));
        setFilters(prev => ({
          ...prev,
          priceRange: [minPrice, maxPrice]
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    if (products.length === 0) return;
    
    let result = [...products];
    
    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    // Apply rating filter
    if (filters.rating) {
      result = result.filter(product => 
        product.rating.rate >= filters.rating!
      );
    }
    
    // Apply sorting
    result = sortProducts(result, sortOption);
    
    setFilteredProducts(result);
  }, [products, filters, sortOption]);

  const sortProducts = (productsToSort: Product[], option: SortOption): Product[] => {
    switch (option) {
      case 'price-low-to-high':
        return [...productsToSort].sort((a, b) => a.price - b.price);
      case 'price-high-to-low':
        return [...productsToSort].sort((a, b) => b.price - a.price);
      case 'highest-rated':
        return [...productsToSort].sort((a, b) => b.rating.rate - a.rating.rate);
      case 'featured':
      default:
        return productsToSort;
    }
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const updateSort = (option: SortOption) => {
    setSortOption(option);
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, Math.ceil(Math.max(...products.map(p => p.price)))],
      rating: null
    });
    setSortOption('featured');
  };

  return {
    products: filteredProducts,
    allProducts: products,
    categories,
    loading,
    error,
    filters,
    sortOption,
    updateFilters,
    updateSort,
    resetFilters
  };
};