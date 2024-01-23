function Skill({ title, skills, className }) {
  return (
    <div className={`${className}`}>
      <section>
        <h2 className="text-3xl italic">{title}</h2>
        <div className="grid grid-cols-5">
          {skills.map(({ skill, image }) => (
            <article className="p-10 m-2 hover:scale-110
            rounded hover:cursor-pointer hover:bg-blue transition duration-300"
            >
              <strong>{skill}</strong>
              <img src={image} alt="" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;
