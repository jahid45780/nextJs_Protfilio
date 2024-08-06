"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website JB_Booking ",
    description: "",
    image: "https://i.ibb.co/5WMjx05/434008021-437764225323106-1756247123103651093-n.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jahid45780/JB-Booking-Client",
    previewUrl: "https://jb-booking-29f8e.web.app",
  },
  {
    id: 2,
    title: "E-commerce Website Bike_Word",
    description: "",
    image: "https://i.ibb.co/WxjDrJJ/452307462-2517755975084991-2627788061562128089-n.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jahid45780/Bike_Word_Client",
    previewUrl: "https://bike-word.vercel.app",
  },
  {
    id: 3,
    title: " React JS Website Bangler_khrisi",
    description: "",
    image: "https://i.ibb.co/HpF3mG8/448872375-416789734684783-4986924758388445742-n.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jahid45780/bangler_khrisi",
    previewUrl: "https://bangler-khrisi.web.app",
  },
  {
    id: 4,
    title: "JavaScript Website PH_Tube",
    description: "",
    image: "/images/projects/PH.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/jahid45780/PH_tube",
    previewUrl: "http://phrero-tube.surge.sh",
  },

  {
    id: 5,
    title: "React Portfolio Website",
    description: "",
    image: "/images/projects/jahid.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://md-jahid.vercel.app",
  },
  {
    id: 6,
    title: "React Management Website",
    description: "",
    image: "https://i.ibb.co/f1W7BZq/423472292-373334398959442-8059960308667372083-n.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jahid45780/wedding-management",
    previewUrl: "https://wedding-management-b09ed.web",
  },
  {
    id: 7,
    title: "JavaScript Website Weather",
    description: "",
    image: "/images/projects/weather.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/jahid45780/PRODIGY_TaskNubber-4",
    previewUrl: "https://weather-azure-rho.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
