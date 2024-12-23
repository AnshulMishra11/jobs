import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/home/Hero';
import TrendingSection from './components/home/TrendingSection';
import NewArrivals from './components/home/NewArrivals';
import Collections from './components/home/Collections';
import Footer from './components/layout/Footer/Footer';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <NewArrivals />
        <Collections />
      </main>
      <Footer />

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-white/90 rounded-2xl" />
            <div className="relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700"
              >
                ×
              </button>
              <div className="text-center">
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Limited Time Offer
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Gift!</h2>
                <p className="text-gray-600 mb-6">
                  Get 20% off on your first purchase with code:
                </p>
                <div className="bg-gray-100 p-3 rounded-lg mb-6">
                  <code className="text-xl font-bold text-red-600">WELCOME20</code>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;