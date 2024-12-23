import React from 'react';

const categories = [
  {
    name: 'Western Collection',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1470',
    description: 'Modern and stylish western wear'
  },
  {
    name: 'Traditional Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1374',
    description: 'Elegant traditional designs'
  },
  {
    name: 'Trending Now',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470',
    description: 'Latest fashion trends'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;