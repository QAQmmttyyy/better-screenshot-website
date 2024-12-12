import React from 'react';
import { Logo } from '../ui/Logo';
import { DownloadButton } from '../ui/DownloadButton';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-md z-50 border-b border-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <DownloadButton />
        </div>
      </div>
    </nav>
  );
}