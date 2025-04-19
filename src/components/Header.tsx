'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Members', href: '#members' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="bg-primary text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            {!logoError ? (
              <div className="relative w-10 h-10">
                <Image
                  src="/images/Unair_logo.png"
                  alt="Universitas Airlangga"
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">UNAIR</span>
              </div>
            )}
            <span className="text-lg font-semibold">Prof. Zakki Research Group</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-gray-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Mobile navigation */}
        <div
          className={clsx(
            'absolute top-16 left-0 right-0 bg-primary z-50 md:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gray-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
} 