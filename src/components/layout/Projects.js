import { forwardRef } from 'react';
import Project from './mini-comp/Project';
import projects from '../../personal-info/projects.json';

const Projects = forwardRef(({ id }, ref) => (
  <div ref={ref} id={id} className="border-2 border-yellow-700 rounded">
    <h1 className="section-title text-3xl">Projects</h1>

    {projects.map(({ title, src, description, stack, id2 }) => (
      <Project title={title} src={src} description={description} stack={stack} key={id2} />
    ))}
  </div>
));

export default Projects;
