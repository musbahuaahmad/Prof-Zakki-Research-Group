'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative h-[500px] bg-primary-dark">
      {!imageError && (
        <div className="absolute inset-0 bg-black/50">
          <Image
            src="/hero.png"
            alt="Research Group"
            fill
            className="object-cover mix-blend-overlay"
            priority
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Nanomaterials Research Group
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Led by Prof. Zakki Fahmi, our research group focuses on nanomaterials and polymer science,
          with applications in energy, environment, and healthcare at Universitas Airlangga.
        </p>
      </div>
    </section>
  );
} 