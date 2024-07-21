import { NavLink } from "react-router-dom";

import Notice from "../component/Notice.jsx";
function Home() {
  return (
    <div>
      {/**Welcome Text */}
      <section className="text-white overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/**Rubiks Information */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="font-extrabold text-6xl">
                Welcome To Rubik&apos;s
              </h1>
              <div className="w-auto py-5">
                <p className="text-2xl font-thin">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, harum? Velit nihil error a, expedita magnam
                  molestias. Consequatur reprehenderit sint, neque dicta minima
                  eius nam dolorum incidunt ea quis iste.
                </p>
              </div>
              <div className="bg-red-600 w-40 h-16 flex justify-center items-center my-8 rounded-md backdrop-blur-lg">
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

      {/**Notice Board */}
      <section className="text-white overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/**Rubiks Information */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="font-extrabold text-6xl">Notice Board</h1>
            </div>

            {/**Image information */}
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                <div className="flex justify-between">
                  <h2 className="font-extrabold uppercase">Notices</h2>
                  <NavLink
                    className="underline font-thin"
                    to="/notice"
                    >
                    view all
                  </NavLink>
                </div>
                <Notice />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
