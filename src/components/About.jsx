import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Likhith, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I specialize in web development, with a focus on React.js. My
              coding journey started during holidays, and it's evolved into a
              passion for crafting user-friendly websites that strike a balance
              between functionality and style. Keen on staying up-to-date with
              industry trends, I aim to create digital solutions that not only
              meet but exceed expectations. Collaboration is at the core of my
              work, emphasizing effective communication, attention to detail,
              and a commitment to excellence. Feel free to explore my portfolio;
              I'm excited about the possibility of building something great
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
