function Education() {
  return (
    <div className="text-center text-white my-10">
      <h1 className="text-3xl">Education</h1>

      {/* div to add stuff */}
      <div className="m-auto w-1/2 bg-gray">
        <section className="p-6 text-left">
          <div className="p-0.5 flex justify-between"><span className="text-xl"> Bachelors of Computer Science,</span> <strong>2022-2026 (expected)</strong></div>
          <small className="p-0.5">CGPA: 4.21/4.3</small>
          <p className="p-0.5"><strong>Relevant Courses: </strong>
            Intro to Computer Science, Web Development, Calculus in
            Computer Science, Data Science, Robotics, Computer Systems, Discrete Math.
          </p>
          <small className="underline italic hover:text-blue p-0.5">Dalhousie University, Halfifax, Canada</small>
        </section>

      </div>
    </div>
  );
}

export default Education;
