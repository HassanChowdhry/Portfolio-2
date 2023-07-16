/* eslint-disable react/jsx-props-no-spreading */
import Exp from './mini-comp/Exp';
import experience from '../../personal-info/experience.json';

function Experience() {
  return (
    <div className="text-center text-white my-10 leading-8">
      <h1 className="text-3xl">Experience</h1>

      {experience.map((inf) => (
        <Exp {...inf} />
      ))}
    </div>
  );
}

export default Experience;
