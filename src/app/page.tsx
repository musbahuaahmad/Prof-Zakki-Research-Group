'use client';

import Image from 'next/image';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Members } from '@/components/Members';
import { Research } from '@/components/Research';
import { Publications } from '@/components/Publications';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Members />
        <Research />
        <Publications />
      </div>
      <Footer />
    </main>
  );
} 