'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Department of Chemistry</p>
              <p className="mb-2">Faculty of Science and Technology</p>
              <p className="mb-2">Universitas Airlangga</p>
              <p className="mb-2">Surabaya, Indonesia</p>
              <p className="mb-2">
                <a href="mailto:m.zakki.fahmi@fst.unair.ac.id" className="hover:text-primary-light transition-colors">
                  m.zakki.fahmi@fst.unair.ac.id
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-primary-light transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#publications" className="hover:text-primary-light transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#members" className="hover:text-primary-light transition-colors">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li>Nanomaterials</li>
              <li>Polymer Science</li>
              <li>Carbon Dots</li>
              <li>Energy Applications</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Prof. Zakki Research Group - Universitas Airlangga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 