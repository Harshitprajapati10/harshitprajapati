import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3, IoLogoAndroid } from "react-icons/io";
import { SiPython, SiDjango, SiGit, SiBootstrap, SiExpress, SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { FaCode, FaGithub, FaJava } from "react-icons/fa";

import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">

                <ProgressBar logo={<SiPython />} name={"Python"} value={85} />
                <ProgressBar logo={<FaJava />} name={"Java"} value={90} />
                <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={80} />

                <ProgressBar logo={<FaCode />} name={"Data Structures"} value={70} />
                <ProgressBar logo={<SiDjango />} name={"Python Django"} value={75} />
                <ProgressBar logo={<SiDjango />} name={"Django REST Framework"} value={75} />

                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />

                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />

                <ProgressBar logo={<SiTailwindcss />} name={"Tailwind CSS"} value={80} />
                <ProgressBar logo={<SiBootstrap />} name={"Bootstrap"} value={75} />
                <ProgressBar logo={<IoLogoNodejs />} name={"Node Js"} value={75} />
                <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={70} />
                <ProgressBar logo={<GrCode />} name={"MySQL"} value={65} />

                <ProgressBar logo={<SiGit />} name={"Git"} value={80} />
                <ProgressBar logo={<FaGithub />} name={"GitHub"} value={85} />

              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<FaCode />}
                black={"white"}
                white={"black"}
                skill={"Data Structures"}
              />
              <SkillBox
                logo={<SiDjango />}
                black={"white"}
                white={"black"}
                skill={"Python Django"}
              />

            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiGit />}
                black={"black"}
                white={"white"}
                skill={"Git"}
              />
              <SkillBox
                logo={<FaReact />}
                black={"black"}
                white={"white"}
                skill={"React Js"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
