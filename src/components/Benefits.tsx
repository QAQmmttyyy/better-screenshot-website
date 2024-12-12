import React from 'react';
import { Clock, Workflow, Users2 } from 'lucide-react';

export default function Benefits() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Save 2 Hours Weekly</h3>
            <div className="h-24 mb-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">120+</div>
              <div className="ml-2 text-gray-600">minutes saved</div>
            </div>
            <p className="text-gray-600">Automate your screenshot workflow and focus on what matters.</p>
          </div>
          
          <div className="text-center">
            <Workflow className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Streamline Your Workflow</h3>
            <div className="h-24 mb-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">3x</div>
              <div className="ml-2 text-gray-600">faster workflow</div>
            </div>
            <p className="text-gray-600">Seamless integration with your existing tools and processes.</p>
          </div>
          
          <div className="text-center">
            <Users2 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Enhance Team Collaboration</h3>
            <div className="h-24 mb-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">50%</div>
              <div className="ml-2 text-gray-600">better feedback</div>
            </div>
            <p className="text-gray-600">Share and collaborate with your team in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}