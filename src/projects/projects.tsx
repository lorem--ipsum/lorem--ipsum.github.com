import { SectionLabel } from '../section-label/section-label';

import styles from './projects.module.css';

const images = import.meta.glob<string>('./images/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

interface ProjectsProps {
  title?: string;
  items: {
    name: string;
    year: number;
    image: string;
    description: string;
    tags: string[];
    links: { label: string; href: string }[];
  }[];
}

export function Projects(props: ProjectsProps) {
  const { items, title } = props;

  return (
    <div className={styles.projects}>
      {title && <SectionLabel label={title} />}
      {items.map(item => (
        <div className={styles.project} key={item.name}>
          <a className={styles.thumbnail} href={item.links[0].href} tabIndex={-1} aria-hidden>
            <img alt="" src={images[`./images/${item.image}`]} loading="lazy" />
          </a>
          <div className={styles.body}>
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
        </div>
      ))}
    </div>
  );
}
