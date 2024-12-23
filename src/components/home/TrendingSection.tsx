import React from 'react';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    name: 'Summer Floral Dress',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1476',
    tag: 'New Arrival'
  },
  {
    id: 2,
    name: 'Ethnic Fusion Set',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1374',
    tag: 'Bestseller'
  },
  {
    id: 3,
    name: 'Modern Cut Jumpsuit',
    price: '₹2,999',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1470',
    tag: 'Trending'
  }
];

const TrendingSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <button className="group flex items-center text-red-600 hover:text-red-700">
            View All 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {item.tag}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-red-600 font-semibold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingSection;