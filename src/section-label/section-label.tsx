import React from 'react';

import './section-label.scss';

interface SectionLabelProps {
  label: string;
}

export function SectionLabel(props: SectionLabelProps) {
  const { label } = props;

  return <div className="section-label">{label}</div>;
}
