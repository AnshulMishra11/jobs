import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';
import Container from '../ui/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'New In', href: '#' },
    { name: 'Western', href: '#' },
    { name: 'Traditional', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Sale', href: '#', highlight: true }
  ];

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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-current"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-1 lg:flex-initial">
            <a href="/" className="text-2xl font-bold text-red-600">
              Mytalorzone
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-red-600 ${
                  item.highlight ? 'text-red-600' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600`}>
              <Search size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600`}>
              <Heart size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600`}>
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t">
          <Container>
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium text-gray-700 hover:text-red-600 ${
                    item.highlight ? 'text-red-600' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;