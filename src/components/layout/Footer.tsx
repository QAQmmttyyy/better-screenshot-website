import React from 'react';
import { FooterSection } from './FooterSection';
import { Copyright } from '../ui/Copyright';

const productLinks = ['Features', 'Pricing', 'Download'];
const companyLinks = ['About', 'Blog', 'Contact'];
const legalLinks = ['Privacy', 'Terms', 'Security'];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Better Screenshot</h3>
            <p className="text-gray-400">Capture, edit, and share screenshots without breaking your flow.</p>
          </div>
          <FooterSection title="Product" links={productLinks} />
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Legal" links={legalLinks} />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}