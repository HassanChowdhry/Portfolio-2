import pic from '../pics/hassan-pic.png';
import LinkedInButton from './UI/LinkedInButton';
import GitButton from './UI/GitButton';

function About() {
  return (
    <div className="flex w-7/12 m-auto bg-gray text-white my-12 p-8 rounded">
      <section className="flex-col w-6/12 text-center">
        <img src={pic} alt="hassan-pic" className="w-2/5 rounded-2xl m-auto" />

        <h2 className="p-2 text-3xl">Hassan Chowdhry</h2>
        <h3 className="p-1 text-xl">Software Developer</h3>
        <nav className="flex gap-4 justify-center">
          <GitButton />

          <LinkedInButton />
        </nav>
      </section>

      <section className="w-9/12 leading-8">
        <h1 className="section-title text-center p-0">About Me</h1>
        <p>
          My name is Hassan Chowdhry, and I am a software developer and 2nd year student
          Computer Science student at Dalhousie University. I&apos;ve worked on a variety of
          projects ranging from vanilla FE to React. In addition, I participate in open
          source projects.
          I have a strong foundation in computer science fundamentals.
        </p>
      </section>
    </div>
  );
}

export default About;
