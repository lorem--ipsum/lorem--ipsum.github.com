import { Fragment } from 'react';

import { SectionLabel } from '../section-label/section-label';

import styles from './timeline.module.css';

interface TimelineProps {
  title?: string;
  items: {
    label: string;
    description: string;
    duration: string;
    fromYear: number | string;
    toYear: number | string;
    company: string;
    href: string;
    tags: string[];
  }[];
}

export function Timeline(props: TimelineProps) {
  const { items, title } = props;

  const years = items.map((item, i) => {
    const company = <div className={styles.company}>{item.company}</div>;

    return (
      <Fragment key={i}>
        {i === 0 && <div className={`${styles.year} ${styles.first}`}>{item.toYear}</div>}
        <div className={styles.experience}>
          <div className={styles.card}>
            <div className={styles.title}>
              {item.label} <span className={styles.duration}>{item.duration}</span>
            </div>
            {item.href ? <a href={item.href}>{company}</a> : company}
            <div className={styles.description}>{item.description}</div>
            <div className={styles.tags}>{item.tags.join(' - ')}</div>
          </div>
        </div>
        <div className={styles.year}>{item.fromYear}</div>
      </Fragment>
    );
  });

  return (
    <div className={styles.timeline}>
      {title && <SectionLabel label={title} className={styles.label} />}
      {years}
    </div>
  );
}
