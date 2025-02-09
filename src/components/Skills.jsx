import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const skillsData = [
  {
    name: "Javascript",
    icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
  },
  {
    name: "Tailwind",
    icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
  {
    name: "HTML",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  },
  {
    name: "Next.js",
    icon: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
  },
];

const Skills = () => {

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible:{
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    }
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
          <SectionTitle title={"Skills"} />
        </motion.div>
        <div>
          <motion.p className="my-6 text-center font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          >
          Techs I work with
          </motion.p>
          <div className="flex gap-6 flex-wrap items-center justify-center">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: index % 2 === 0 ? [-3, 3, -3] : [3, -3, 3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-center border-2 p-2 md:p-4 rounded-xl border-success"
              >
                <div className="w-20 h-20 p-2">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="text-[#00BF83] font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
