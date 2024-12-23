import React from 'react';
import Container from '@/components/ui/Container';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { Newsletter } from './Newsletter';
import { SocialLinks } from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Mytalorzone</h3>
            <p className="text-gray-400 mb-6">
              Discover the perfect blend of tradition and trend with our curated collection of clothing.
            </p>
            <SocialLinks />
          </div>
          
          <FooterLinks
            title="Quick Links"
            links={[
              { name: 'About Us', href: '#' },
              { name: 'Contact', href: '#' },
              { name: 'FAQs', href: '#' },
              { name: 'Size Guide', href: '#' }
            ]}
          />
          
          <FooterLinks
            title="Categories"
            links={[
              { name: 'New Arrivals', href: '#' },
              { name: 'Western Wear', href: '#' },
              { name: 'Traditional', href: '#' },
              { name: 'Sale', href: '#' }
            ]}
          />
          
          <Newsletter />
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Mytalorzone. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;