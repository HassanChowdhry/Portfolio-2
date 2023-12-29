import { forwardRef } from 'react';
import Skill from './mini-comp/Skill';
import data from '../../personal-info/skills.json';

const Skills = forwardRef(({ id }, ref) => (
  <div ref={ref} id={id} className="border-2 border-green-900 rounded">
    <h1 className="section-title text-3xl">Skills</h1>

    {data.map(({ title, skills }) => (
      <Skill title={title} skills={skills} />
    ))}
  </div>
));

export default Skills;
