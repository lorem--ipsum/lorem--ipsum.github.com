import { SectionLabel } from '../section-label/section-label';

import styles from './projects.module.css';

interface ProjectsProps {
  title?: string;
  items: {
    name: string;
    year: number;
    description: string;
    tags: string[];
    links: { label: string; href: string }[];
  }[];
}

export function Projects(props: ProjectsProps) {
  const { items, title } = props;

  return (
    <div>
      {title && <SectionLabel label={title} />}
      <div className={styles.grid}>
        {items.map(item => (
          <div className={styles.card} key={item.name}>
            <div className={styles.title}>
              {item.name} <span className={styles.year}>{item.year}</span>
            </div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.tags}>{item.tags.join(' - ')}</div>
            <div className={styles.links}>
              {item.links.map(link => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
