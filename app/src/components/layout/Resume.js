function Resume() {
  return (
    <div className="text-center text-white my-10">
      <h1>Education / Skills</h1>

      {/* div to add stuff */}
      <div className="flex justify-center m-auto w-1/2 bg-gray">
        <section className="w-1/3 my-auto">
          <p>2022</p>
          <p>Uni</p>
          <p>BCS</p>
          <p>Loc</p>
        </section>

        <section className="p-16 w-2/3">
          <p className="overflow-y-clip">
            {/* courses taking or taken */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia sunt veniam est veritatis eum qui nisi ducimus velit ad r
            eiciendis non consectetur neque, voluptates officiis? Adipisci nesciunt del
            ectus libero est.
          </p>
        </section>

      </div>
    </div>
  );
}

export default Resume;
