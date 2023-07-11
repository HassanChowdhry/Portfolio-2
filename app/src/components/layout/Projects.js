import Project from './mini-comp/Project';
import projects from '../../personal-info/projects.json';

function Projects() {
  return (
    <div className="text-center text-white my-10 rounded">
      <h1 className="text-3xl">Projects</h1>

      {projects.map(({ title, src, description, stack, id }) => (
        <Project title={title} src={src} description={description} stack={stack} key={id} />
      ))}
    </div>
  );
}

export default Projects;
