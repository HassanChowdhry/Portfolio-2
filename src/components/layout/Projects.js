import { forwardRef } from 'react';
import Project from './mini-comp/Project';
import projects from '../../personal-info/projects.json';

const Projects = forwardRef(({ id, className }, ref) => (
  <div ref={ref} id={id} className="flex-col items-center">
    <hr />
    <h1 className="section-title">Projects</h1>

    {projects.map(({ title, src, description, stack, id2 }) => (
      <Project className={className} title={title} src={src} description={description} stack={stack} key={id2} />
    ))}
  </div>
));

export default Projects;
