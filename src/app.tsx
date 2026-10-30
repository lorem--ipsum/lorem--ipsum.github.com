import { Oud } from 'oud';

import career from './career.json';
import { DefinitionList } from './definition-list/definition-list';
import IDCard from './id-card/id-card';
import skills from './skills.json';
import { Timeline } from './timeline/timeline';

import styles from './app.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.id}>
        <IDCard current="work" />
      </div>
      <div className={styles.career}>
        <Timeline title="Work Experience" items={career} />
      </div>
      <div className={styles.skills}>
        <DefinitionList title="Skills" groups={skills} />
        <a href="/oud">
          <div className={styles.demo}>
            <Oud deaf exampleIndex={4} width={200} height={200} />
          </div>
        </a>
      </div>
      <footer className={styles.footer}>
        <p>Made with React</p>
      </footer>
    </div>
  );
}
