function Project() {
  return (
    <div className="text-center text-white my-10">
      <h1>Projects</h1>

      {/* div to add stuff */}
      <div className="flex justify-center m-auto w-1/2 bg-gray">
        <section className="p-16 w-2/3">
          <h2 className="mb-10">Project Title</h2>
          <p className="overflow-y-clip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia sunt veniam est veritatis eum qui nisi ducimus velit ad r
            eiciendis non consectetur neque, voluptates officiis? Adipisci nesciunt del
            ectus libero est.
          </p>
        </section>

        <section className="w-1/3">
          <img alt="preview" />
        </section>
      </div>
    </div>
  );
}

export default Project;
