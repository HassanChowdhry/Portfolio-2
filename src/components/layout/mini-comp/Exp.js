function Exp({ company, title, location, time, stack, description, className }) {
  return (
    <div className={`${className}`}>
      <section className="text-left">
        <div className="flex justify-between">
          <span className=""> {company}</span>
          <span className="">{location}</span>
        </div>

        <div className="flex justify-between">
          <span className="">{title}</span>
          <span className="">{time}</span>
        </div>

        <ul className="list-disc list-inside">
          {description.map((line) => (<li>{line}</li>))}
          <li>
            <span className="font-black">Tech Stack: </span> {stack}
          </li>
        </ul>

      </section>
    </div>
  );
}

export default Exp;
