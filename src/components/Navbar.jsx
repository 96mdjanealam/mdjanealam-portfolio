import { ImMenu } from "react-icons/im";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Md Jane Alam resume.pdf";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>About Me</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Education & Credentials</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 backdrop-blur-lg bg-base-100/60">
      <div className="navbar shadow-sm md:w-[80%] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-xl lg:hidden"
            >
              <ImMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href={resume}
            download="Md_Jane_Alam_Resume.pdf"
            className="btn btn-success"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
