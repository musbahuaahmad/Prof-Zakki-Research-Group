'use client';

const researchInterests = [
  {
    title: 'Nanomaterials',
    description: 'Synthesis and characterization of novel nanomaterials for various applications.',
  },
  {
    title: 'Polymer Science',
    description: 'Development and study of advanced polymer materials and their properties.',
  },
  {
    title: 'Carbon Dots',
    description: 'Research on carbon quantum dots and their applications in sensing and imaging.',
  },
  {
    title: 'Energy Applications',
    description: 'Development of materials for energy conversion and storage.',
  },
];

export function Research() {
  return (
    <section id="research" className="py-16">
      <h2 className="text-3xl font-bold text-secondary mb-8">Research</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchInterests.map((interest) => (
          <div
            key={interest.title}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">
              {interest.title}
            </h3>
            <p className="text-secondary-light">
              {interest.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Sustainable Development Goals
        </h3>
        <p className="text-secondary-light mb-6">
          Our research contributes to the following UN Sustainable Development Goals: 3, 5, 6, 7, 11, 12, and 14
        </p>
      </div>
    </section>
  );
} 