import Link from 'next/link';
import type { FC } from 'react';
import styles from './RelatedLinks.module.css';

interface LinkItem {
  href: string;
  label: string;
}

interface LinksMap {
  [key: string]: LinkItem[];
}

interface RelatedLinksProps {
  currentPage: 'services' | 'projects' | 'apropos' | 'contact' | 'artisans' | 'associations';
}

const RelatedLinks: FC<RelatedLinksProps> = ({ currentPage }) => {
  const links: LinksMap = {
    artisans: [
      { href: '/projects', label: 'Voir mes réalisations' },
      { href: '/associations', label: 'Vous présidez une association ?' }
    ],
    associations: [
      { href: '/projects', label: 'Voir mes réalisations' },
      { href: '/artisans', label: 'Vous êtes artisan ou commerçant ?' }
    ],
    services: [
      { href: '/projects', label: 'Voir mes réalisations' },
      { href: '/contact', label: 'Discutons de votre projet' }
    ],
    projects: [
      { href: '/artisans', label: 'Mon offre pour les artisans' },
      { href: '/associations', label: 'Mon offre pour les associations' }
    ],
    apropos: [
      { href: '/artisans', label: 'Mon offre pour les artisans' },
      { href: '/associations', label: 'Mon offre pour les associations' }
    ],
    contact: [
      { href: '/services', label: 'Voir ce que je peux faire pour vous' },
      { href: '/projects', label: 'Parcourir mes projets' }
    ]
  };

  const currentLinks = links[currentPage] || [];

  if (currentLinks.length === 0) return null;

  return (
    <section className={styles.relatedLinks}>
      <div className={styles.container}>
        <h3>Voir aussi</h3>
        <div className={styles.linksGrid}>
          {currentLinks.map((link, index) => (
            <Link key={index} href={link.href} className={styles.link}>
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;