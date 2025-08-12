'use client';

import React from 'react';
import { LucideIcon, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type SocialLink = {
  icon: LucideIcon | React.ReactNode;
  label: string;
  href: string;
  color?: string;
};

const data = {
  facebookLink: 'https://www.facebook.com/profile.php?id=61566249706090',
  instaLink: 'https://www.instagram.com/logicwerk/',
  twitterLink: 'https://x.com/Logicwerk',
  linkedinLink: 'https://www.linkedin.com/company/logicwerk',
  packs: [
    { text: 'BuildWerk', href: '/packs/buildwerk' },
    { text: 'DataWerk', href: '/packs/datawerk' },
    { text: 'CloudWerk', href: '/packs/cloudwerk' },
    { text: 'OpsWerk', href: '/packs/opswerk' },
    { text: 'CoreWerk', href: '/packs/corewerk' },
    { text: 'ProcessWerk', href: '/packs/processwerk' },
    { text: 'EdgeWerk', href: '/packs/edgewerk' },
    { text: 'AgentWerk', href: '/packs/agentwerk' },
    { text: 'TestWerk', href: '/packs/testwerk' },
  ],
  products: [
    { text: 'Lumeo Suite', href: '/products/lumeo-suite', logo: '/logos/lumeo-suite-logo.png' },
    { text: 'Lumeo Procure', href: '/products/lumeo-procure', logo: '/logos/lumeo-suite-logo.png' },
    { text: 'Lumeo Cloud', href: '/products/lumeo-cloud', logo: '/logos/lumio-cloud-logo.png' },
  ],
  company: [
    { text: 'About', href: '/about' },
    { text: 'Careers', href: '/careers' },
    { text: 'Contact', href: '/contact' },
    { text: 'CSR', href: '/csr' },
    { text: 'Insights', href: '/insights' },
  ],
  contact: {
    email: 'hello@logicwerk.com',
    phone: '+91 820 899 0366',
  },
  logo: '/logos/logicwerk-footer-logo.png',
  description:
    'AI-augmented teams. Modern software, delivered at the speed of thought. We help startups and enterprises launch, scale, and win.',
  privacy: '/privacy',
  terms: '/terms',
};

const socialLinks: SocialLink[] = [
  { 
    icon: Facebook, 
    label: 'Facebook', 
    href: data.facebookLink, 
    color: 'white' 
  },
  { 
    icon: Instagram, 
    label: 'Instagram', 
    href: data.instaLink, 
    color: 'white' 
  },
  { 
    icon: (
      <Image 
        src="/logos/x-logo.svg" 
        alt="X" 
        width={20} 
        height={20} 
        style={{ filter: 'brightness(0) invert(1)' }} 
      />
    ), 
    label: 'X', 
    href: data.twitterLink 
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: data.linkedinLink, 
    color: 'white' 
  },
];



export default function Footer4Col() {
  return (
    <footer className="bg-black w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex flex-col items-center sm:items-start">
  <img
    src={data.logo}
    alt="Logicwerk logo"
    className="h-14 w-auto mb-4"
  />

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href, color }) => {
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-gray-800 p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label={label}
                    >
                      {React.isValidElement(Icon) ? (
                        <div className="w-5 h-5">
                          {Icon}
                        </div>
                      ) : (
                        <div className="w-5 h-5 flex items-center justify-center">
                          {React.createElement(Icon as React.ComponentType<{ className?: string; color?: string }>, {
                            className: "w-5 h-5",
                            color: color || 'white'
                          })}
                        </div>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {/* Packs */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium mb-6 text-white">Packs</p>
              <ul className="space-y-4 text-sm">
                {data.packs.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-gray-200 transition hover:text-blue-400" href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Products */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium mb-6 text-white">Products</p>
              <ul className="space-y-4 text-sm">
                {data.products.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-gray-200 transition hover:text-blue-400" href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium mb-6 text-white">Company</p>
              <ul className="space-y-4 text-sm">
                {data.company.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-gray-200 transition hover:text-blue-400" href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium mb-6 text-white">Contact</p>
              <ul className="space-y-4 text-sm">
                <li><a className="flex items-center gap-2 text-gray-200 transition" href={`mailto:${data.contact.email}`}><Mail className="size-5 text-white" />{data.contact.email}</a></li>
                <li><a className="flex items-center gap-2 text-gray-200 transition" href={`tel:${data.contact.phone}`}><Phone className="size-5 text-white" />{data.contact.phone}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center">
            <div className="flex items-center gap-2 text-gray-200 text-sm">
              <a href={data.privacy} className="hover:text-primary transition">Privacy Policy</a>
              <span className="mx-1">|</span>
              <a href={data.terms} className="hover:text-primary transition">Terms of Service</a>
            </div>
            <div className="text-gray-400 text-xs">&copy; 2025 Logicwerk. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
