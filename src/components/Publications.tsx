'use client';

import React from 'react';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume: string;
  pages: string;
  link: string;
}

const publications: Publication[] = [
  {
    title: 'Carbon quantum dots: Classification-structure-property-application relationship for biomedical and environment remediation',
    authors: 'Rasal, A. S., Subrahmanya, T. M., Kizhepat, S., Getachew, G., Ghule, A. V., Devan, R. S., Hung, W. S., Fahmi, M. Z., Wibrianto, A. & Chang, J. Y.',
    journal: 'Coordination Chemistry Reviews',
    year: 2025,
    volume: '533',
    pages: '216510',
    link: 'https://doi.org/10.1016/j.ccr.2025.216510',
  },
  {
    title: 'Advance Heteroatom Dopants Nitrogen, Boron, Sulphur, and Phosphorus on Carbon Dots towards Histamine Detection in Fish Sample',
    authors: 'Fahmi, M. Z., Sugito, S. F. A., Hanifah, N. A., Nuraini, U. L., Purwanto, B. & Voon, L. H.',
    journal: 'Sains Malaysiana',
    year: 2024,
    volume: '53(2)',
    pages: '347-358',
    link: 'https://doi.org/10.17576/jsm-2024-5302-09',
  },
  {
    title: 'Potential usage of boron modified carbon nanodots as a marker candidate for coronavirus disease (COVID-19) antibody detection',
    authors: 'Wibrianto, A.; Saputra, Y. J.; Sugito, S. F. A.; Khairunisa, S. Q.; Rachman, B. E.; Nasronudin, N.; Megasari, N. L. A.; Chang, J.; Fahmi, M. Z.',
    journal: 'Journal of Pharmaceutical and Biomedical Analysis',
    year: 2024,
    volume: '248',
    pages: '116242',
    link: 'https://doi.org/10.1016/j.jpba.2024.116242',
  },
  {
    title: 'Unraveling In Vivo Potential of Curcumin-Loaded Graphene Quantum Dots on Drug Delivery and Release Kinetics Aspects of Cancer Treatment.',
    authors: 'Fahmi, M. Z.; Sugito, S. F. A.; Wibrianto, A.; Novania, S.; Widyastuti, S.; Ahmad, M. A.; Sakti, S. C. W.; Voon, L. H.',
    journal: 'Nanotheranostics ',
    year: 2024,
    volume: '8(4)',
    pages: '521-534',
    link: 'https://doi.org/10.7150/ntno.96559',
  },
  {
    title: 'Mass Spectrometry-Based Analyses of Carbon Nanodots: Structural Elucidation.',
    authors: 'Ahmad, M. A.; Sumarsih, S.; Chang, J.; Fahmi, M. Z.',
    journal: 'ACS Omega',
    year: '2024',
    volume: '9(19)',
    pages: '20720-20727',
    link: 'https://doi.org/10.1021/acsomega.4c01674',
  }
];

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-16">
      <h2 className="text-3xl font-bold text-secondary mb-8">Recent Publications</h2>
      
      <div className="space-y-8">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              {pub.title}
            </h3>
            <p className="text-secondary-light mb-2">
              {pub.authors}
            </p>
            <p className="text-sm text-secondary">
              <span className="font-medium">{pub.journal}</span>, {pub.year}, {pub.volume}, {pub.pages}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:text-primary-dark transition-colors"
            >
              View Publication →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://scholar.google.com/citations?hl=id&user=B1ZCPiMAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          View All Publications on Google Scholar
        </a>
      </div>
    </section>
  );
}; 