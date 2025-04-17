import Hero from "./ui/Hero";

const Home = () => {
  return (
    <>
      <section
        id="container"
        className="flex min-h-screen w-[1200px] justify-center"
      >
        <div className="z-10 flex flex-col items-center justify-center gap-8">
          <Hero />
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen flex-col items-center gap-12 pt-32"
      >
        <h1 className="text-7xl font-bold">Projects</h1>

        <div className="flex flex-col gap-4">
          {/* <Projects projectsData={projectsData} /> */}
        </div>
      </section>

      <section
        id="experience"
        className="flex min-h-screen flex-col items-center gap-12 pt-32"
      >
        <h1 className="text-7xl font-bold">Experience</h1>

        <div className="flex flex-col gap-4"></div>

        <div className="flex flex-col gap-4"></div>
      </section>
    </>
  );
};

export default Home;
