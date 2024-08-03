"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Orbit } from "next/font/google";
import Ocbit from "./Ocbit";
import { FaDownload } from "react-icons/fa";

const TAB_DATA = [
  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">

        <div>
        <h1 className=" text-lg font-semibold" > Computer Science And Technology </h1>
        <h1>Narsingdi Polytechnic Institute</h1>
        </div>

      <div>
      <h1 className=" text-lg font-semibold" > Computer Science And Engineering </h1>
      <h1>Northern University Bangladesh</h1>
      </div>
       
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
       <h1>Programming Hero</h1>
       <button className=" px-6 inline-block py-3 w-full sm:w-fit rounded-se-3xl rounded-bl-3xl bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a className=" flex items-center gap-2 "  href="certificate[1883].pdf" download='certificate.pdf' > Certificate <FaDownload></FaDownload>  </a> 
              </button>
      </ul>
    ),
  },

  {
    title: "Offer",
    id: "Offer",
    content: (
      <ul className="list-disc pl-2">
       <h1>Prodigy InfoTech</h1>
       <button className=" px-6 inline-block py-3 w-full sm:w-fit rounded-se-3xl rounded-bl-3xl bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a className=" flex items-center gap-2 "  href="Offer Letter.pdf" download='Offer Letter.pdf' > Offer Letter  <FaDownload></FaDownload>  </a> 
              </button>
      </ul>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("Offer");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
            <Ocbit></Ocbit>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello guys!! I am Md Jahid from Bangladesh. Currently Im a student of CSE (Computer Science & Engineering) Im a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app. With over 1+ years of experience in web development, Ive honed my skills in a variety of technologies, including ReactJs, NextJs, Nodejs,ExpressJs,Firebase, Javascript es6+ and MongoDb
          </p>
          <div className="flex flex-row justify-start mt-8">
           
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
         
            <TabButton
              selectTab={() => handleTabChange("Offer")}
              active={tab === "Offer"}
            >
              {" "}
              Offer Letter{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
