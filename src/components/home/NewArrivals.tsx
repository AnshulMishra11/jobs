import React from 'react';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const newArrivals = [
  {
    id: 1,
    name: 'Designer Anarkali',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1374',
    tag: 'New Season'
  },
  {
    id: 2,
    name: 'Party Wear Gown',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1383',
    tag: 'Bestseller'
  },
  {
    id: 3,
    name: 'Casual Dress',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1374',
    tag: 'Limited Edition'
  },
  {
    id: 4,
    name: 'Elegant Saree',
    price: '₹6,999',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1374',
    tag: 'Premium'
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
          <button className="group flex items-center text-red-600 hover:text-red-700">
            View All 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium group-hover:text-red-600 transition-colors">{item.name}</h3>
                <p className="text-red-600 font-semibold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;