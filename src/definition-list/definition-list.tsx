import React from 'react';

import { SectionLabel } from '../section-label/section-label';

import './definition-list.scss';

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
    <div className="definition-list">
      {title && <SectionLabel label={title} />}
      {groups.map(group => {
        return (
          <div className="group" key={group.title}>
            <div className="title">{group.title}</div>
            <div className="items">
              {group.items.map((item, i) => {
                return (
                  <div key={i} className="item">
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
