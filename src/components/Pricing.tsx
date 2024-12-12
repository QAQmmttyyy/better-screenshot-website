import React, { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    features: [
      "Unlimited screenshots",
      "Basic editing tools",
      "Local storage",
      "Export to PNG/JPG"
    ]
  },
  {
    name: "Pro",
    price: { monthly: 9.99, annual: 95.90 },
    features: [
      "Everything in Free",
      "Advanced editing tools",
      "Cloud storage",
      "Instant sharing",
      "Priority support"
    ],
    recommended: true
  },
  {
    name: "Team",
    price: { monthly: 19.99, annual: 191.90 },
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin controls",
      "API access",
      "Custom branding",
      "24/7 support"
    ]
  }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Simple, Transparent Pricing</h2>
          <div className="flex items-center justify-center gap-4">
            <span className={annual ? 'text-gray-500' : 'text-gray-900'}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
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
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
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
          ))}
        </div>
      </div>
    </div>
  );
}