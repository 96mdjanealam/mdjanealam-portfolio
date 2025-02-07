import { ImMenu } from "react-icons/im";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Md Jane Alam resume.pdf";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = (
    <>
      {location.pathname.includes("project-detail") ? (
        <>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <a onClick={() => scrollToSection("about-me")}>About Me</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")}>
              Education & Credentials
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </>
      )}
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
          <Link to="/">
            <p className="btn btn-ghost text-xl">
              Port<span className="text-success -ml-1">folio</span>
            </p>
          </Link>
        </div>
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
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
