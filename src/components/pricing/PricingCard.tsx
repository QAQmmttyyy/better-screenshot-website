import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: {
    name: string;
    price: {
      monthly: number;
      annual: number;
    };
    features: string[];
    recommended?: boolean;
  };
  annual: boolean;
}

export function PricingCard({ plan, annual }: PricingCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl p-8 ${
        plan.recommended ? 'ring-2 ring-blue-600 shadow-lg' : 'border border-gray-200'
      }`}
    >
      {plan.recommended && (
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Recommended
        </span>
      )}
      <h3 className="text-2xl font-semibold mt-4">{plan.name}</h3>
      <div className="mt-4 mb-8">
        <span className="text-4xl font-bold">
          ${annual ? plan.price.annual : plan.price.monthly}
        </span>
        {plan.price.monthly > 0 && (
          <span className="text-gray-500">/{annual ? 'year' : 'month'}</span>
        )}
      </div>
      <ul className="space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-blue-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold ${
        plan.recommended
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      } transition-colors`}>
        Get Started
      </button>
    </div>
  );
}