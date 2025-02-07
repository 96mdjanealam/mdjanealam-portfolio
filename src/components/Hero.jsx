import profileImg from "../assets/Profile.jpg";
import { IoIosPin } from "react-icons/io";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6";
import resume from "../assets/Md Jane Alam resume.pdf";

const Hero = () => {
  return (
    <div className="bg-base-200 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <div className="w-70 h-70">
            <img
              src={profileImg}
              className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-[#00BF83]"
            />
          </div>

          <div className="md:w-[65%]">
            <h1 className="text-4xl mt-10 md:mt-0">Hi! This is</h1>
            <h1 className="text-5xl font-bold mt-4">Md Jane Alam</h1>
            <h1 className="text-3xl mt-2 text-[#00BF83]">Web Developer</h1>
            <p className="py-6">
              I am committed to optimizing both front-end user experiences and
              back-end performance. Eager to contribute to innovative projects.
            </p>
            <div className="flex items-center">
              <IoIosPin className="text-xl " />
              <p className="ml-4">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <FaCode className="text-[#00BF83] text-xl" />
              <p className="ml-4">Available for projects.</p>
            </div>
            <div className="mt-6 space-x-3 ">
              <div className="mt-6 space-x-3 flex">
                <a
                  href="https://github.com/96mdjanealam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl hover:text-[#00BF83]" />
                </a>
                <a
                  href="https://linkedin.com/in/96mdjanealam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl hover:text-[#00BF83]" />
                </a>
              </div>
            </div>
            <a
              href={resume}
              download="Md_Jane_Alam_Resume.pdf"
              className="btn btn-success mt-6"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
