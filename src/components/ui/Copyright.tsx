import React from 'react';

export function Copyright() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      © {new Date().getFullYear()} Better Screenshot. All rights reserved.
    </div>
  );
}