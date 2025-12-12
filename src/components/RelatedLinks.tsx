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
  currentPage: 'services' | 'projects' | 'apropos' | 'contact';
}

const RelatedLinks: FC<RelatedLinksProps> = ({ currentPage }) => {
  const links: LinksMap = {
    services: [
      { href: '/projects', label: 'Voir mes réalisations' },
      { href: '/contact', label: 'Discutons de votre projet' }
    ],
    projects: [
      { href: '/services', label: 'Découvrir mes services' },
      { href: '/contact', label: 'Démarrer votre projet' }
    ],
    apropos: [
      { href: '/services', label: 'Mes services' },
      { href: '/contact', label: 'Parlons ensemble' }
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