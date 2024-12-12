import React from 'react';

export function HeroVideo() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-light/10 shadow-2xl">
        <video 
          className="w-full"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://storage.googleapis.com/betterscreenshot-demo/workflow-demo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}