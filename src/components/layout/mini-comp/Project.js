function Project({ title, description, stack, className }) {
  return (
    <div className="flex">
      <section className={`${className} text-left`}>
        <h2 className="mb-10 text-2xl font-bold">{title}</h2>

        <ul className="list-disc list-inside">
          <li className="mb-5 overflow-y-clip">
            {description}
          </li>
          <li>
            <span>Tech Stack: </span> {stack}
          </li>
        </ul>

      </section>

    </div>
  );
}

export default Project;
