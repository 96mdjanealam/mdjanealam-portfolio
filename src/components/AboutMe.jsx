import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { GoDotFill } from "react-icons/go";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }, // Applied to all elements at once
  },
};

const AboutMe = () => {
  return (
    <div className="bg-[#00BF83]/20 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        
        {/* Animated Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <SectionTitle title={"About Me"} />
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="my-6 text-center font-semibold"
        >
          Curious about me? Here you go!
        </motion.p>

        <div className="space-y-2">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            With experience in the MERN stack (MongoDB, Express.js, React.js, and Node.js) alongside strong proficiency in HTML, JavaScript, Tailwind CSS, and vanilla CSS, I have built a solid foundation in web development. Additionally, I work with Firebase for authentication and real-time database management, ensuring seamless integration across applications. I actively utilize Git for version control, maintaining structured workflows and efficient collaboration.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            My passion lies in full-stack development, where I focus on crafting intuitive front-end user experiences while optimizing back-end performance for scalability and efficiency. Whether it's designing responsive UIs, implementing robust API architectures, or streamlining database interactions, I am always eager to refine my technical expertise and explore innovative solutions.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            I constantly challenge myself by building diverse projects that push my problem-solving abilities and deepen my understanding of web technologies. Beyond coding, I enjoy collaborating with like-minded developers, exchanging ideas, and staying updated with the latest industry trends. I’m always open to new opportunities, exciting projects, and meaningful collaborations in the ever-evolving web development landscape. Let’s connect and create something impactful!
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mt-6"
        >
          <p className="font-semibold mb-2">Fun facts:</p>
          <div className="space-y-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="flex items-center"
            >
              <GoDotFill />
              <p className="ml-4">Walking helps me brainstorm new features for my projects… or just think about pizza.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="flex items-center"
            >
              <GoDotFill />
              <p className="ml-4">I used to be an avid reader and am trying to bring that habit back into my routine.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="flex items-center"
            >
              <GoDotFill />
              <p className="ml-4">When I’m not coding, I enjoy exploring creative design ideas and experimenting with UI aesthetics.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
