import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      {/**Welcome Text */}
      <section className="text-white overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/**Rubiks Information */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="font-extrabold text-6xl bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Welcome To Rubik&apos;s
              </h1>
              <div className="w-auto py-5">
                <p className="text-2xl font-thin w-96 p-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, harum? Velit nihil error a, expedita magnam
                  molestias. Consequatur reprehenderit sint, neque dicta minima
                  eius nam dolorum incidunt ea quis iste.
                </p>
              </div>
              <div className="bg-red-600 w-40 h-16 flex justify-center items-center my-8 rounded-md backdrop-blur-lg mx-4">
                <NavLink
                  className="font-semibold text-2xl uppercase"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            </div>

            {/**Image information */}
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                <h2>Image</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
