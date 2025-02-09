import React from "react";
import projectsData from "../assets/ProjectsData.json";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = projectsData?.projects;

const Projects = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-base-200 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <SectionTitle title={"Projects"} />
        </motion.div>
        <motion.p
          className="my-6 text-center font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Some of my projects
        </motion.p>
        {/* projects */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card bg-base-100 shadow-sm border-2 border-success"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <figure className="px-5 pt-5 h-60">
                <img
                  src={project.projectImage}
                  alt=""
                  className="rounded-md h-full w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{project.projectName}</h2>
                <p>{project.briefDescription}</p>
                <div className="card-actions mt-2">
                  <Link to={`/project-detail/${project.id}`}>
                    <button className="btn btn-success">View More</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
