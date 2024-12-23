import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const SocialLinks = () => (
  <div className="flex space-x-4">
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
    >
      <Facebook size={20} />
    </a>
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
    >
      <Instagram size={20} />
    </a>
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
    >
      <Twitter size={20} />
    </a>
  </div>
);