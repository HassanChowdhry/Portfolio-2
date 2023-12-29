/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import Exp from './mini-comp/Exp';
import experience from '../../personal-info/experience.json';

const Experience = forwardRef(({ id }, ref) => (
  <div ref={ref} id={id} className="border-2 border-red-500 leading-8">
    <h1 className="section-title text-3xl">Experience</h1>

    {experience.map((inf) => (
      <Exp {...inf} />
    ))}
  </div>
));

export default Experience;
