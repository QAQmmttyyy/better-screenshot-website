import React from 'react';
import { ArrowRight } from 'lucide-react';

export function DownloadButton() {
  return (
    <button className="group bg-purple hover:bg-purple-dark text-light text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
      Download Free
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}