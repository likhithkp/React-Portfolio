import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Likhith K.P.
        </h1>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Software Developer.
        </h3>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a developer, I intricately weave brilliance into the fabric of every codebase. With a relentless dedication from conception to execution, I sculpt seamless digital experiences that push the boundaries of what's possible.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span>
                <HiArrowNarrowRight className="ml-4 group-hover:rotate-90 duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

