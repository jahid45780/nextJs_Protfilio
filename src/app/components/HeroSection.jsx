"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "} <span>👋</span>
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jahid",
                900,
                "Web Developer",
               
                "Mern Stack Developer",
                
                "Front-End Developer ",
                
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <div className="text-[#e8eaec] text-base sm:text-lg mb-6 lg:text-xl">
          Allah Is The Owner Of Sustenance You Just Try  <br />
         
            
          </div>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-se-3xl rounded-bl-3xl mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
           
             
              <button className=" px-6 inline-block py-3 w-full sm:w-fit rounded-se-3xl rounded-bl-3xl bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a className=" flex items-center gap-2 "  href="Resume_MD Jahid.pdf" download='Resume_MD Jahid' > Resume <FaDownload></FaDownload>  </a> 
              </button>
          
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/images/Jahid.jfif"
              alt="hero image"
              className="absolute rounded-full border-2 border-dashed border-[#e2dddd] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
