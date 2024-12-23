import React from 'react';
import { navItems } from './constants';

interface NavItemsProps {
  isScrolled: boolean;
}

export const NavItems = ({ isScrolled }: NavItemsProps) => (
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
);