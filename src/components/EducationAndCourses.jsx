import React from "react";
import SectionTitle from "./SectionTitle";
import GradCap from "../assets/logos/graduation-cap.png";
import Coding from "../assets/logos/code.png";
import Ielts from "../assets/logos/ielts.png";
import GraphicDesign from "../assets/logos/graphic-design.png";
import { IoIosPin } from "react-icons/io";
import { motion } from "framer-motion";

const EducationAndCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      image: Coding,
      institute: "Programming Hero",
      location: "Dhaka, Bangladesh",
      year: "2024",
      description:
        "During my web development journey, I learned various technologies and tools: JavaScript, React, Next.js, MongoDB, Node.js, Express.js, Firebase, Tailwind, HTML, and CSS. These have helped me build better and more efficient web applications.",
    },
    {
      id: 2,
      title: "IELTS",
      image: Ielts,
      institute: "British Council",
      location: "Dhaka, Bangladesh",
      year: "2022",
      description:
        "I successfully completed the IELTS certification and achieved a band score of 7. It has strengthened my communication skills for both academic and professional settings.",
    },
    {
      id: 3,
      title: "Graphic Design",
      image: GraphicDesign,
      institute: "Shikhbe Shobai",
      location: "Dhaka, Bangladesh",
      year: "2020",
      description:
        "I completed a Graphic Design course, learning Adobe Illustrator and Adobe Photoshop. This helped me develop skills in vector graphics, photo editing, and visual design.",
    },
    {
      id: 4,
      title: "Bachelor of Science",
      image: GradCap,
      institute:
        "IUBAT - International University of Business Agriculture and Technology",
      location: "Dhaka, Bangladesh",
      year: "2021",
      description:
        "I graduated with a BSc in Civil Engineering, achieving a CGPA of 3.69 out of 4. Although I pursued web development, my engineering background has strengthened my logical thinking and structured approach.",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-[#00BF83]/20 py-10 md:py-20 overflow-hidden">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <SectionTitle title={"Education & Credentials"} />
        </motion.div>
        <motion.p
          className="my-6 text-center font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          My Education and Skill Development Journey
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="card bg-base-100 shadow-md border-2 border-success relative"
            >
              <h2 className="absolute right-4 top-2 font-bold text-3xl opacity-30 text-success">
                {course.year}
              </h2>
              <div className="card-body flex-row">
                <div className="w-[20%] flex-shrink-0">
                  <img
                    src={course.image}
                    className="w-full object-contain pr-4"
                    alt={course.title}
                  />
                </div>
                <div className="w-[80%]">
                  <h2 className="card-title">{course.title}</h2>
                  <div className="badge badge-outline badge-success my-1 py-1 h-auto">
                    {course.institute}
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosPin className="text-lg -ml-1" />
                    <p>{course.location}</p>
                  </div>
                  <p className="mt-4 text-sm">{course.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndCourses;
