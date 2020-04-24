import React from 'react';
import { Oud } from 'oud';

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
        <a href="/oud">
          <div className="demo">
            <Oud deaf exampleIndex={4} width={200} height={200} />
          </div>
        </a>
      </div>
    </div>
  );
}
