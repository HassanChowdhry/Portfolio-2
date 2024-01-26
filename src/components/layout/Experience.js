/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import Exp from './mini-comp/Exp';
import experience from '../../personal-info/experience.json';

const Experience = forwardRef(({ id, className }, ref) => (
  <div ref={ref} id={id} className="h-screen">
    <hr />
    <h1 className="section-title">Experience</h1>

    {experience.map((inf) => (
      <Exp {...inf} className={className} />
    ))}
  </div>
));

export default Experience;
