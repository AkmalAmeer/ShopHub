import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';
import Rating from '../ui/Rating';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };
  
  const addToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };
  
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <button 
        onClick={toggleWishlist}
        className="absolute top-2 right-2 p-1.5 bg-white rounded-full z-10 shadow-sm hover:shadow transition-shadow"
      >
        <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
      </button>
      
      <a href="#" className="block h-48 md:h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      
      <div className="p-4">
        <h3 className="text-sm text-gray-500 mb-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </h3>
        <a href="#" className="block">
          <h2 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 h-12">
            {product.title}
          </h2>
        </a>
        
        <div className="mb-2">
          <Rating value={product.rating.rate} count={product.rating.count} />
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <Button 
          onClick={addToCart}
          variant={isAddedToCart ? 'secondary' : 'primary'}
          fullWidth
          className="transition-colors"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;