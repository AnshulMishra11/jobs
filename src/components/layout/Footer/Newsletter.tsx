import React from 'react';
import Button from '@/components/ui/Button';

export const Newsletter = () => (
  <div>
    <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
    <p className="text-gray-400 mb-4">
      Stay updated with our latest collections and exclusive offers.
    </p>
    <form className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 text-white"
      />
      <Button variant="primary" className="w-full">
        Subscribe
      </Button>
    </form>
  </div>
);