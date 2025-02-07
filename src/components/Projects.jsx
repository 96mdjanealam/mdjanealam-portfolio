import React from "react";
import projectsData from "../assets/ProjectsData.json";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const projects = projectsData?.projects;

const Projects = () => {
  return (
    <div className="bg-base-200 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        <SectionTitle title={"Projects"} />
        <div>
          <p className="my-6 text-center font-semibold">Some of my projects</p>
        </div>
{/* projects */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {projects.map(project => (
        <div key={project.id} className="card bg-base-100 shadow-sm border-2 border-success hover:scale-104 transition duration-300 ease-in-out">
        <figure className="px-5 pt-5 h-60">
          <img
            src={project.projectImage}
            alt=""
            className="rounded-md h-full w-full object-cover" />
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
      </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Projects;
