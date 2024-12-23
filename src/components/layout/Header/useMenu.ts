import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  
  return {
    isMenuOpen,
    toggleMenu
  };
};