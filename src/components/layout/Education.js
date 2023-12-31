import { forwardRef } from 'react';
import university from '../../personal-info/university.json';

const Education = forwardRef(({ id, className }, ref) => {
  const { title, length, CGPA, courses, location } = university;
  return (
    <div ref={ref} id={id} className="h-screen flex">
      <div className={`${className}`}>
        <h1 className="section-title text-center">Education</h1>

        <section className="text-left">
          <div className="flex justify-between"><span className="text-xl"> {title},</span> <strong>{length}</strong></div>
          <small>CGPA: {CGPA}</small>
          <p><strong>Relevant Courses: </strong>
            {courses}
          </p>
          <small className="underline italic hover:text-blue">{location}</small>
        </section>

      </div>
    </div>
  );
});

export default Education;
