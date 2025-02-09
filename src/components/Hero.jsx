import { motion } from "framer-motion";
import profileImg from "../assets/Profile.jpg";
import { IoIosPin } from "react-icons/io";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6";
import resume from "../assets/Md Jane Alam resume.pdf";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const Hero = () => {
  return (
    <div className="bg-base-200 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-70 h-70"
          >
            <img
              src={profileImg}
              className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-[#00BF83]"
            />
          </motion.div>

          <div className="md:w-[65%]">
            {["Hi! This is", "Md Jane Alam", "Web Developer"].map((text, i) => (
              <motion.h1
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={
                  i === 0
                    ? "text-4xl mt-10 md:mt-0"
                    : i === 1
                    ? "text-5xl font-bold mt-4"
                    : "text-3xl mt-2 text-[#00BF83]"
                }
              >
                {text}
              </motion.h1>
            ))}

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="py-6"
            >
              I am committed to optimizing both front-end user experiences and
              back-end performance. Eager to contribute to innovative projects.
            </motion.p>

            {[{ icon: <IoIosPin className="text-xl" />, text: "Dhaka, Bangladesh" },
              { icon: <FaCode className="text-[#00BF83] text-xl" />, text: "Available for projects." }]
              .map((item, i) => (
                <motion.div
                  key={i}
                  custom={4 + i}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="flex items-center"
                >
                  {item.icon}
                  <p className="ml-4">{item.text}</p>
                </motion.div>
              ))}

            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-6 space-x-3 flex"
            >
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
            </motion.div>

            <motion.a
              custom={7}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              href={resume}
              download="Md_Jane_Alam_Resume.pdf"
              className="btn btn-success mt-6"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
