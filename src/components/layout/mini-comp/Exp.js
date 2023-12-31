function Exp({ company, title, location, time, stack, description, className }) {
  return (
    <div className={`${className}`}>
      <section className="p-6 text-left">
        <div className="p-0.5 flex justify-between">
          <strong className="text-xl font-semibold"> {company}</strong>
          <span className="underline italic hover:text-blue p-0.5">{location}</span>
        </div>
        <div className="p-0.5 flex justify-between">
          <i className="text-lg">{title}</i>
          <i className=" p-0.5">{time}</i>
        </div>
        <p>
          &bull; <b>Tech Stack: </b> {stack}
        </p>
        {description.map((line) => (<p>&bull; {line}</p>))}
      </section>
    </div>
  );
}

export default Exp;
