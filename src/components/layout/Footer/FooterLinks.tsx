import React from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);