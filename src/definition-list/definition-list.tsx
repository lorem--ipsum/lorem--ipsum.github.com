import { SectionLabel } from '../section-label/section-label';

import styles from './definition-list.module.css';

interface DefinitionListProps {
  title?: string;
  groups: {
    title: string;
    items: string[];
  }[];
}

export function DefinitionList(props: DefinitionListProps) {
  const { groups, title } = props;

  return (
    <div>
      {title && <SectionLabel label={title} />}
      {groups.map(group => {
        return (
          <div className={styles.group} key={group.title}>
            <div className={styles.title}>{group.title}</div>
            <div className={styles.items}>
              {group.items.map((item, i) => {
                return (
                  <div key={i} className={styles.item}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
