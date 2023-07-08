import Skill from './mini-comp/Skill';
import data from '../../personal-info/skills.json';

function Skills() {
  return (
    <div className="text-center text-white my-10">
      <h1 className="text-3xl">Skills</h1>

      {data.map(({ title, skills }) => (
        <Skill title={title} skills={skills} />
      ))}
    </div>
  );
}

export default Skills;
