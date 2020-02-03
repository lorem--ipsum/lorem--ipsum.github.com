import React from 'react';

import career from './career.json';
import { DefinitionList } from './definition-list/definition-list';
import IDCard from './id-card/id-card';
import skills from './skills.json';
import { Timeline } from './timeline/timeline';

import './app.scss';

export default function App() {
  return (
    <div className="app">
      <IDCard />
      <div className="career">
        <Timeline title="Work Experience" items={career} />
      </div>
      <div className="skills">
        <DefinitionList title="Skills" groups={skills} />
      </div>
    </div>
  );
}
