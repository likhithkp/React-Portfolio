import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import TypeScript from  "../assets/typescript_5968381.png";
import ReactNative from "../assets/rn.png"
import Nextjs from "../assets/nextjs.png"
import app from "../assets/app.png"

const Skills = () => {
  return (
    <div name="skills" className=" bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col gap-5 justify-center w-full h-screen">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={ReactNative} alt="HTML icon" />
            <p className="my-4">REACT NATIVE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 h-30 mx-auto" src={Nextjs} alt="HTML icon" />
            <p className="my-4">Next.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={app} alt="HTML icon" />
            <p className="my-4">APP DEVELOPMENT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
