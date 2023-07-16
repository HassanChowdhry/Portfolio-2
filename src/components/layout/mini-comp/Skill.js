function Skill({ title, skills }) {
  return (
    <div className="m-auto rounded mb-12 p-4 w-2/3 bg-gray">
      <section>
        <h2 className="section-title">{title}</h2>
        <div className="grid grid-cols-5">
          {skills.map(({ skill, image }) => (
            <article className="p-8 rounded hover:cursor-pointer hover:bg-blue transition duration-300">
              <h5>{skill}</h5>
              <img src={image} alt="" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;
