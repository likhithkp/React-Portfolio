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
          Embarking on my coding journey during the third year of my engineering studies, I have cultivated a profound specialization in software development. This odyssey has transformed into a fervent dedication to the art of crafting user-centric applications that harmoniously amalgamate functionality and aesthetic appeal.</p>
          <br />
          <p>
          Committed to continual learning, I not only specialize in software development but also possess the capacity to adeptly learn new and diverse technologies. Maintaining a vigilant watch on industry trends, I am driven to conceptualize and deliver digital solutions that not only meet expectations but transcend them. At the heart of my professional ethos lies a commitment to collaboration, underscored by effective communication, meticulous attention to detail, and an unwavering pursuit of excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
