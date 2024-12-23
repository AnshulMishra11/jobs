import React from 'react';
import { X, LogIn, Heart, Search, ShoppingBag } from 'lucide-react';
import { navItems } from './constants';
import { useAuth } from '@/hooks/useAuth';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { isAuthenticated, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 lg:hidden">
      <div className="flex flex-col h-full">
        <div className="px-4 py-4 border-b flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">Menu</span>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-lg font-medium text-gray-900 hover:text-red-600 ${
                  item.highlight ? 'text-red-600' : ''
                }`}
                onClick={onClose}
              >
                {item.name}
              </a>
            ))}
            
            <div className="space-y-4 pt-6 border-t">
              <a href="/search" className="flex items-center space-x-2 text-gray-900">
                <Search size={20} />
                <span>Search</span>
              </a>
              <a href="/wishlist" className="flex items-center space-x-2 text-gray-900">
                <Heart size={20} />
                <span>Wishlist</span>
              </a>
              <a href="/cart" className="flex items-center space-x-2 text-gray-900">
                <ShoppingBag size={20} />
                <span>Cart</span>
              </a>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="flex items-center space-x-2 text-gray-900 w-full"
                >
                  <LogIn size={20} />
                  <span>Logout</span>
                </button>
              ) : (
                <a
                  href="/login"
                  className="flex items-center space-x-2 text-gray-900"
                  onClick={onClose}
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </a>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};