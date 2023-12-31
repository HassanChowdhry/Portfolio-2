import { forwardRef } from 'react';
import Skill from './mini-comp/Skill';
import data from '../../personal-info/skills.json';

const Skills = forwardRef(({ id, className }, ref) => (
  <div ref={ref} id={id}>
    <h1 className="section-title">Skills</h1>

    {data.map(({ title, skills }) => (
      <Skill className={className} title={title} skills={skills} />
    ))}
  </div>
));

export default Skills;
