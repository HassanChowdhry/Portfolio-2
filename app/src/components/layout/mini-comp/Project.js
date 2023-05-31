function Project() {
  return (
    <div className="flex justify-center m-auto w-1/2 bg-gray">
      <section className="p-16 w-2/3">
        <h2 className="mb-10 text-2xl font-bold">Google Links</h2>
        <p className="overflow-y-clip">
          Programmed an open-source web application that improved productivity for researchers.
          The application scrapes google search data and parse it into an excel sheet according
          to the research requirement.
        </p>
      </section>

      <section className="w-1/3">
        <img alt="preview" />
      </section>
    </div>
  );
}

export default Project;
