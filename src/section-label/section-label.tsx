import styles from './section-label.module.css';

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel(props: SectionLabelProps) {
  const { label, className } = props;

  return <div className={className ? `${styles.label} ${className}` : styles.label}>{label}</div>;
}
