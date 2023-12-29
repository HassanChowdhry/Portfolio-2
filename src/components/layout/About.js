import { forwardRef } from 'react';

const About = forwardRef(({ id }, ref) => (
  <div ref={ref} id={id} className="border-2 border-blue h-screen">
    <div className="flex w-7/12 m-auto bg-gray my-12 p-8 rounded">
      <section className="flex-col w-6/12 text-center">
        <h2 className="p-2 text-3xl">Hassan Chowdhry</h2>
        <h3 className="p-1 text-xl">Software Developer</h3>
      </section>

      <section className="w-9/12 leading-8">
        <h1 className="section-title p-0">About Me</h1>
        <p>
          My name is Hassan Chowdhry, and I am a software developer and 2nd year student
          Computer Science student at Dalhousie University. I&apos;ve worked on a variety of
          projects ranging from vanilla FE to React. In addition, I participate in open
          source projects.
          I have a strong foundation in computer science fundamentals.
        </p>
      </section>
    </div>
  </div>
));

export default About;
