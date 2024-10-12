import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Swalook Global Pvt. Ltd
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Feb 2024 - Aug 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Engineered a comprehensive CRM platform during my internship, expanding functionality to include 5+
                  sub-branches, optimizing appointment bookings by 30%, generating 100+ bills weekly, and integrating advanced
                  business analysis tools and a customer loyalty program, which increased client retention by 15%
                </p>
              </div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Web Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  IIIT Vadodara
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  October 2023 - November 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Directed the development of the institute’s 5th convocation website, ensuring a seamless user experience and timely
delivery.
                </p>
              </div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Bombay Cat Flims
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  July 2023 - September 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Designed and deployed a recruitment platform for organizational management, streamlining the processing of 200+
                applications weekly, automating candidate tracking, and reducing time-to-hire by 20%.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Information Technology
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Indian Institute of Information Technology Vadodara
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021 - Year 2025
                </span>
                {/* <p className=" text-[.9rem] text-justify text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p> */}
              </div>

              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Higher Secondary Education, XII
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Prerna College of Commerce, Science & Art
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2019 - Year 2021
                </span>
                {/* <p className=" text-[.9rem] text-justify text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p> */}
              </div>

            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
