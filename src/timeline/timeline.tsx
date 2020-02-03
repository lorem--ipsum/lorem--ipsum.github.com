import React from 'react';

import { SectionLabel } from '../section-label/section-label';

import './timeline.scss';

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
    const company = <div className="company">{item.company}</div>;

    return (
      <React.Fragment key={i}>
        {i === 0 && <div className="year active first">{item.toYear}</div>}
        <div className="experience">
          <div className="card">
            <div className="title">
              {item.label} <span className="duration">{item.duration}</span>
            </div>
            {item.href ? <a href={item.href}>{company}</a> : company}
            <div className="description">{item.description}</div>
            <div className="tags">{item.tags.join(' - ')}</div>
          </div>
        </div>
        <div className="year">{item.fromYear}</div>
      </React.Fragment>
    );
  });

  return (
    <div className="timeline">
      {title && <SectionLabel label={title} />}
      {years}
    </div>
  );
}
