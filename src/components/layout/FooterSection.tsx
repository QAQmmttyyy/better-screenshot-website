import React from 'react';

interface FooterSectionProps {
  title: string;
  links: string[];
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-400">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}