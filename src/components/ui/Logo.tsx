import React from 'react';
import { Crop } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-light rounded-xl p-2">
        <Crop className="w-5 h-5 text-dark" />
      </div>
      <span className="text-xl font-semibold text-light">Better Screenshot</span>
    </div>
  );
}