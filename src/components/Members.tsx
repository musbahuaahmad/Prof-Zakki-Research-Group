'use client';

import Image from 'next/image';

const members = [
  {
    name: 'Prof. Mochamad Zakki Fahmi, PhD.',
    role: 'Principal Investigator',
    image: '/members/Zakki.png',
    description: 'Professor in Materials Science, Department of Chemistry, Physics and Materials Science',
  },
  {
    name: 'Musbahu Adam Ahmad, PhD.',
    role: 'Postdoctoral Researcher',
    image: '/members/Musbahu_Adam_Ahmad.jpg',
    description: 'Research focus on plant based carbon nanodots, metal-carbon nanodots hybrids and their applications in cancer diagnosis and therapy through photothermal and photodynamic therapies',
  },
  {
    name: 'Fatma Radwan, MSc.',
    role: 'Doctoral Student',
    image: '/members/fatma.jpg',
    description: 'Research focus on metal-curcumin nanohybrids and their applications in cancer photothermal and photodynamic therapies',
  },
  {
    name: 'Khariza Makanty',
    role: 'Master Student',
    image: '/members/Khariza.jpg',
    description: 'Research focus on gold nanohybrids and their applications in cancer photothermal and photodynamic therapies',
  },
  {
    name: 'Difa Arief Yanuar',
    role: 'Bachelor Student',
    image: '/members/difa.jpg',
    description: 'Research focus on titanium dioxide nanohybrids and their in vivoapplications inphotothermal therapy',
  },
  // Add more members here
];

export function Members() {
  return (
    <section id="members" className="py-16">
      <h2 className="text-3xl font-bold text-secondary mb-8">Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-72">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-secondary-light">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 