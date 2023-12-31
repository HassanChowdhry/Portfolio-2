function Project({ title, description, stack, className }) {
  return (
    <div className="flex">
      <section className={`${className} text-left`}>
        <h2 className="mb-10 text-2xl font-bold">{title}</h2>
        <p className="mb-5 overflow-y-clip">
          &bull; {description}
        </p>
        <p>
          &bull; <b>Tech Stack: </b> {stack}
        </p>
      </section>

    </div>
  );
}

export default Project;
