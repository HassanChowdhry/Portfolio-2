import { forwardRef } from 'react';
import uni from '../../personal-info/university.json';

const Education = forwardRef(({ id, className }, ref) => {
  const { university, title, length, CGPA, courses, location } = uni;
  return (
    <div ref={ref} id={id} className="h-screen flex">
      <div className={`${className}`}>
        <h1 className="section-title text-center">Education</h1>

        <section className="text-left">

          <div className="flex justify-between mb-3">
            <strong className="text-2xl">{university}</strong>
            <em>{location}</em>
          </div>

          <div className="flex justify-between mb-3">
            <strong className="text-xl">{title}</strong>
            <em>{length}</em>
          </div>

          <ul className="list-disc list-inside">
            <li className="mb-3"> <strong>CGPA:</strong> {CGPA}</li>
            <li> <strong>Relevant Courses:</strong> {courses}</li>
          </ul>
        </section>

      </div>
    </div>
  );
});

export default Education;
