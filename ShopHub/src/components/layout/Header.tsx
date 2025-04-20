import React from 'react';
import { Search, ShoppingCart, Heart, Menu, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="hidden md:flex items-center justify-center space-x-8 py-4 border-b">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Shop</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Skills</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About Us</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact Us</a>
        </nav>
        
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
          </div>
          
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-5">
            <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <Heart className="h-5 w-5" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="block md:hidden pb-4">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search for products..."
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;