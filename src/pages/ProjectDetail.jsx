import { IoIosPin } from "react-icons/io";
import SectionTitle from "../components/SectionTitle";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/Profile.jpg";
import projectsData from "../assets/ProjectsData.json";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = projectsData?.projects;
  const singleProject = projects.find((project) => project.id == id);

  const {
    projectName,
    projectImage,
    frontendTechnologies,
    backendTechnologies,
    briefDescription,
    liveProjectLink,
    githubRepositoryLink,
    challengesFaced,
    potentialImprovements,
  } = singleProject;

  return (
    <div className="bg-[#00BF83]/20 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        <SectionTitle title={"Project Detail"}></SectionTitle>
        <div className="flex flex-col lg:flex-row-reverse justify-between mt-10">
          <div className="h-70">
            <img
              src={projectImage}
              className="w-full h-full rounded-xl object-cover shadow-2xl border-4 border-[#00BF83]"
              alt={projectName}
            />
          </div>

          <div className="lg:w-[65%] lg:pr-4">
            <h1 className="text-4xl mt-10 lg:mt-0 font-bold">{projectName}</h1>
            <p className="py-6">{briefDescription}</p>
            
            <h2 className="text-2xl font-semibold mt-6">Technologies Used</h2>
            <p className="mt-2 font-semibold">Frontend:</p>
            
              {frontendTechnologies.map((tech, index) => (
                <div key={index} className="badge badge-outline badge-success mr-2 mt-2 py-1 h-auto">
                {tech}
              </div>
              ))}
            
            <p className="mt-2 font-semibold">Backend:</p>
            {backendTechnologies.map((tech, index) => (
                <div key={index} className="badge badge-outline badge-success mr-2 mt-2 py-1 h-auto">
                {tech}
              </div>
              ))}
            
            <h2 className="text-2xl font-semibold mt-6 mb-2">Challenges Faced</h2>
            <ul className="list-disc ml-6">
              {challengesFaced.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Potential Improvements</h2>
            <ul className="list-disc ml-6">
              {potentialImprovements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>

            <div className="mt-6 flex space-x-4">
              <a
                href={liveProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Live Project
              </a>
              <a
                href={githubRepositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-soft btn-success"
              >
                <FaGithub className="inline-block text-2xl mr-2" /> GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
