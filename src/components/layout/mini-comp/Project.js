function Project({ title, description, src, stack }) {
  return (
    <div className="flex w-2/3 m-auto bg-gray mb-16">
      <section className="w-3/4 text-left p-14">
        <h2 className="mb-10 text-2xl font-bold">{title}</h2>
        <p className="mb-5 overflow-y-clip">
          &bull; {description}
        </p>
        <p>
          &bull; <b>Tech Stack: </b> {stack}
        </p>
      </section>

      <section className="w-2/4">
        <img className="h-full" src={src} alt={title} />
      </section>

    </div>
  );
}

export default Project;
