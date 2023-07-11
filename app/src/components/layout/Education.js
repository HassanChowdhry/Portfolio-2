import university from '../../personal-info/university.json';

function Education() {
  const { title, length, CGPA, courses, location } = university;
  return (
    <div className="text-center text-white my-10 leading-8">
      <h1 className="text-3xl">Education</h1>

      {/* div to add stuff */}
      <div className="m-auto w-1/2 bg-gray">
        <section className="p-6 text-left">
          <div className="p-0.5 flex justify-between"><span className="text-xl"> {title},</span> <strong>{length}</strong></div>
          <small className="p-0.5">CGPA: {CGPA}</small>
          <p className="p-0.5"><strong>Relevant Courses: </strong>
            {courses}
          </p>
          <small className="underline italic hover:text-blue p-0.5">{location}</small>
        </section>

      </div>
    </div>
  );
}

export default Education;
