import { forwardRef } from 'react';
import uni from '../../personal-info/university.json';

const Education = forwardRef(({ id, className }, ref) => {
  const { university, title, length, CGPA, courses, location } = uni;
  return (
    <div ref={ref} id={id} className="h-screen flex">
      <div className={`${className}`}>
        <h1 className="section-title text-center">Education</h1>

        <section className="text-left">

          <div className="flex justify-between">
            <span className="text-3xl font-black">{university}</span>
            <span>{location}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-2xl font-black">{title}</span>
            <span>{length}</span>
          </div>

          <ul className="list-disc list-inside">
            <li> <span className="text-xl font-black">CGPA:</span> {CGPA}</li>
            <li> <span className="text-xl font-black">Relevant Courses:</span> {courses}</li>
          </ul>
        </section>

      </div>
    </div>
  );
});

export default Education;
