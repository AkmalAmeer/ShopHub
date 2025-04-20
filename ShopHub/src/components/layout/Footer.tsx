import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">All Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Featured</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Discounts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Skills</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">1234 Street Name</li>
              <li className="text-gray-600">City, State 12345</li>
              <li className="text-gray-600">Phone: (123) 456-7890</li>
              <li className="text-gray-600">Email: support@shophub.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates and offers.</p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div>
              <h4 className="text-sm font-semibold mb-3">Payment Methods</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mastercard_logo_svg.svg/100px-Mastercard_logo_svg.svg.png" alt="Mastercard" className="h-6" />
                </div>
                <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/100px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
                </div>
                <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/100px-PayPal.svg.png" alt="PayPal" className="h-6" />
                </div>
                <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Pay_Logo.svg/100px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6" />
                </div>
                <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/100px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 ShopHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;