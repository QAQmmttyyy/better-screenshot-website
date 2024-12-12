import React from 'react';
import { ArrowRight, Crop } from 'lucide-react';
import { HeroTitle } from './hero/HeroTitle';
import { HeroVideo } from './hero/HeroVideo';
import { DownloadButton } from './ui/DownloadButton';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-2xl bg-light/5 mb-8 animate-float">
            <Crop className="h-12 w-12 text-purple" />
          </div>
          
          <HeroTitle />
          
          <p className="max-w-2xl mx-auto text-xl text-light/70 mb-10">
            Keep your momentum while capturing perfect screenshots.
            No pauses. No interruptions.
          </p>
          
          <DownloadButton />
        </div>
        
        <HeroVideo />
      </div>
    </div>
  );
}