import IDCard from './id-card/id-card';
import { Projects } from './projects/projects';
import projects from './projects.json';

import styles from './projects-page.module.css';

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <IDCard current="projects" />
      <div className={styles.content}>
        <Projects title="Projects" items={projects} />
      </div>
    </div>
  );
}
