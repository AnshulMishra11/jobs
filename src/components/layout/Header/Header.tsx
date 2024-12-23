import React from 'react';
import { Menu, X, ShoppingBag, Search, Heart, LogIn } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenu } from './useMenu';
import { NavItems } from './NavItems';
import { MobileMenu } from './MobileMenu';
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
  const isScrolled = useScrollPosition();
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isAuthenticated, logout } = useAuth();

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-current"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-1 lg:flex-initial">
            <a href="/" className="text-2xl font-bold text-red-600">
              Mytalorzone
            </a>
          </div>

          <NavItems isScrolled={isScrolled} />

          <div className="flex items-center space-x-4 md:space-x-6">
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600 hidden md:block`}>
              <Search size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600 hidden md:block`}>
              <Heart size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600`}>
              <ShoppingBag size={20} />
            </button>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-red-600 text-sm font-medium hidden md:block`}
              >
                Logout
              </button>
            ) : (
              <a
                href="/login"
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-red-600 hidden md:flex items-center space-x-1`}
              >
                <LogIn size={20} />
                <span className="text-sm font-medium">Login</span>
              </a>
            )}
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={() => toggleMenu()} />
    </header>
  );
};

export default Header;