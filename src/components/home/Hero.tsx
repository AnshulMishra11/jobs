import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470"
            alt="Hero 2"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <Container className="relative">
        <div className="max-w-2xl">
          <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            New Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your Signature Style
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            Explore our curated collection of contemporary and traditional designs crafted for the modern woman.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary">
              View Lookbook
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;