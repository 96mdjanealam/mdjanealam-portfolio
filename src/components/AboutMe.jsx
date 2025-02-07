import React from "react";
import SectionTitle from "./SectionTitle";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const AboutMe = () => {
  return (
    <div className="bg-[#00BF83]/20 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        <SectionTitle title={"About Me"}></SectionTitle>
        <div>
          <p className="my-6 text-center font-semibold">Curious about me? Here you go!</p>
          <div className="space-y-2">
            <p>
              With experience in the MERN stack (MongoDB, Express.js,
              React.js, and Node.js) alongside strong proficiency in HTML,
              JavaScript, Tailwind CSS, and vanilla CSS, I have built a solid
              foundation in web development. Additionally, I work with Firebase
              for authentication and real-time database management, ensuring
              seamless integration across applications. I actively utilize Git
              for version control, maintaining structured workflows and
              efficient collaboration.
            </p>
            <p>
              My passion lies in full-stack development, where I focus on
              crafting intuitive front-end user experiences while optimizing
              back-end performance for scalability and efficiency. Whether it's
              designing responsive UIs, implementing robust API architectures,
              or streamlining database interactions, I am always eager to refine
              my technical expertise and explore innovative solutions.
            </p>
            <p>
              I constantly challenge myself by building diverse projects that
              push my problem-solving abilities and deepen my understanding of
              web technologies. Beyond coding, I enjoy collaborating with
              like-minded developers, exchanging ideas, and staying updated with
              the latest industry trends. I’m always open to new opportunities,
              exciting projects, and meaningful collaborations in the
              ever-evolving web development landscape. Let’s connect and create
              something impactful!
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-2">Fun facts:</p>
            <div className="space-y-2">
            <div className="flex items-center">
              <GoDotFill className="" />{" "}
              <p className="ml-4">Walking helps me brainstorm new features for my projects… or just think about pizza.</p>
            </div>
            <div className="flex items-center">
              <GoDotFill />
              <p className="ml-4">I used to be an avid reader and am trying to bring that habit back into my routine.</p>
            </div>
            <div className="flex items-center">
              <GoDotFill />
              <p className="ml-4">When I’m not coding, I enjoy exploring creative design ideas and experimenting with UI aesthetics.</p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
