function Exp({ company, title, location, time, stack, description, className }) {
  return (
    <div className={`${className}`}>
      <section className="text-left">
        <div className="flex justify-between mb-5">
          <strong className="text-2xl"> {company}</strong>
          <em className="">{location}</em>
        </div>

        <div className="flex justify-between mb-5">
          <strong className="text-xl">{title}</strong>
          <em>{time}</em>
        </div>

        <ul className="overflow-y-clip list-disc list-inside">
          {description.map((line) => (<li className="mb-3 overflow-y-clip">{line}</li>))}
          <li>
            <strong>Technologies used:</strong> {stack}
          </li>
        </ul>

      </section>
    </div>
  );
}

export default Exp;
