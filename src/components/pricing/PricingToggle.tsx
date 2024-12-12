import React from 'react';

interface PricingToggleProps {
  annual: boolean;
  onToggle: () => void;
}

export function PricingToggle({ annual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={annual ? 'text-gray-500' : 'text-gray-900'}>Monthly</span>
      <button 
        onClick={onToggle}
        className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 ease-in-out ${
          annual ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <div className={`w-6 h-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
          annual ? 'translate-x-6' : 'translate-x-0'
        }`} />
      </button>
      <span className={annual ? 'text-gray-900' : 'text-gray-500'}>
        Annual (Save 20%)
      </span>
    </div>
  );
}