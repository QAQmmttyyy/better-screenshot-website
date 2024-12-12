import React from 'react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer at Dropbox",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "Better Screenshot has transformed how our design team collaborates. The instant sharing feature alone saves us hours every week."
  },
  {
    name: "Michael Rodriguez",
    role: "Engineering Lead at Stripe",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "The seamless workflow integration is a game-changer. It's become an essential part of our bug reporting process."
  },
  {
    name: "Emily Watson",
    role: "Content Manager at Notion",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "I've tried many screenshot tools, but Better Screenshot's organization features are unmatched. It's incredibly intuitive."
  }
];

const companies = [
  "Dropbox", "Stripe", "Notion", "Figma", "Slack"
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Trusted by teams at</p>
          <div className="flex justify-center space-x-12">
            {companies.map((company, index) => (
              <span key={index} className="text-xl font-semibold text-gray-400">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}