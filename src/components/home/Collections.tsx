import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const collections = [
  {
    id: 1,
    name: 'Summer Collection',
    description: 'Light and breezy designs for the season',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1383',
    position: 'left'
  },
  {
    id: 2,
    name: 'Festive Wear',
    description: 'Celebrate in style with our festive collection',
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1374',
    position: 'right'
  }
];

const Collections = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="space-y-16">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className={`flex flex-col ${collection.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{collection.name}</h2>
                <p className="text-gray-600 mb-8 text-lg">{collection.description}</p>
                <Button>Explore Collection</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Collections;