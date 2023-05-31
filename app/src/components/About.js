import pic from '../pics/hassan-pic.png';

function About() {
  return (
    <div className="flex w-6/12 m-auto bg-gray text-white my-10 p-8">
      <section className="flex-col w-6/12 text-center p-4">
        <img src={pic} alt="hassan-pic" className="w-2/5 rounded-full m-auto" />

        <h2 className="pb-6 text-3xl">Hassan Chowdhry</h2>
        <h3 className="pb-3 text-xl">Software Developer</h3>
        <nav className="flex gap-4 justify-center">
          <span>LinkedIn</span>
          <span>Github</span>
        </nav>
      </section>

      <section className="w-6/12 leading-8 p-4 text-center my-auto">
        <p>
          My name is Hassan Chowdhry, and I am a software developer and 1st year student
          Computer Science student at Dalhousie University. I&apos;ve worked on a variety of
          projects ranging from vanilla FE to React. In addition, I participate in open
          source projects.
          I have a strong foundation in computer science fundamentals.
          Gaming, music, football, anime and the gym are some of my other interests.
        </p>
      </section>
    </div>
  );
}

export default About;
