function Project() {
  return (
    <div className="flex flex-col justify-center w-2/3 m-auto bg-gray">
      <section className="p-14">
        <h2 className="mb-10 text-2xl font-bold">Google Links</h2>
        <p className="overflow-y-clip">
          Programmed an open-source web application that improved productivity for researchers.
          The application scrapes google search data and parse it into an excel sheet according
          to the research requirement.
        </p>
      </section>

      <section className="">
        <iframe className="w-full" style={{ aspectRatio: '15/5' }} src="https://d17o0fjvg61p4q.cloudfront.net/gallery" title="tweet-gen" />
      </section>
    </div>
  );
}

export default Project;
