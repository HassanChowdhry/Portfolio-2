function About() {
  return (
    <div className="flex w-6/12 m-auto bg-gray text-white my-10">
      <section className="flex-col w-6/12 text-center py-32">
        {/* Image goes here */}
        <h2 className="pb-6 text-3xl">Hassan Chowdhry</h2>
        <h3 className="pb-3 text-xl">Software Developer</h3>
        <nav className="flex gap-4 justify-center">
          <span>LinkedIn</span>
          <span>Github</span>
        </nav>
      </section>

      <section className="w-6/12 leading-6 py-32">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          In voluptas omnis amet minima libero! Incidunt illum libero rerum,
          error explicabo molestias,
          praesentium saepe sequi nihil, placeat laudantium qui ratione consectetur.
        </p>
      </section>
    </div>
  );
}

export default About;
