import { forwardRef } from 'react';

const About = forwardRef(({ id, className }, ref) => (
  <div>
    <div ref={ref} id={id} className="h-screen flex">
      <section className={`${className} leading-8`}>
        <h1 className="section-title">About Me</h1>
        <p>
          I am a dedicated and ambitious current student at Dalhousie University,
          pursuing a degree in Computer Science with an impressive CGPA of 4.24/4.3.
          With a strong foundation in programming languages, algorithms, and data structures,
          my true passion lies in the exciting field of full stack web development.
        </p>
      </section>
    </div>
    <hr />
  </div>
));

export default About;
