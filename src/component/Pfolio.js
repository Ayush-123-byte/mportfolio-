import React, { useContext, useEffect } from "react";

import "../Style/Pfolio.css";
import "../Style/Pfoliomedia.css";
import ayuPic from "../assert/pic1.png";
import { TbBrandNextjs } from "react-icons/tb";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillHtml5,
  AiFillInstagram,
} from "react-icons/ai";
import { PiMedalFill, PiStudentFill } from "react-icons/pi";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import { RiBootstrapFill, RiMailAddFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { darkmode } from "../context/Darkmode";
import Projects from "./Projects";
function Pfolio() {
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   } // eslint-disable-next-line
  // }, []);
  const { mode } = useContext(darkmode);
  const mode_change = {
    color: mode === "dark" ? "white" : "#333",
  };
  const mode_change1 = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };
  return (
    <div className=" md:px-20 px-10 space-y-32  ">
      <div id="profile">
        <div className="section__pic-container flex items-center  justify-center">
          <img className=" md:w-full md:h-full w-64 h-64 rounded-full" src={ayuPic} alt="..." />
        </div>
        <div className="section__text">
          <p className="section__text__p1" style={mode_change}>
            Hello, I'm
          </p>
          <h1 className="title font-serif">Ayush Kumar </h1>
          <p style={mode_change}>Non-Tech to Tech</p> <br />
          <p style={mode_change} className="text-lg ">
            Web Developer | UI/UX Designer
          </p>
          <p style={mode_change} className="text-gray-400 mb-8">
            Welcome to my portfolio. I specialize in creating responsive and
            user-friendly web applications.
          </p>
          <div className="btn-container">
            <Link to={"/cv"}>
              <button
                className="btn btn-color-2 hover:text-white hover:bg-gray-900"
                style={mode_change}
              >
                Download CV
              </button>
            </Link>
            <Link to={"/contact"}>
              {" "}
              <button className="btn btn-color-1 ">Contact Info</button>
            </Link>
          </div>
          <div id="socials-container">
            <Link
              className=" p-2 rounded-full  border-gray-300 hover:border-2"
              to={
                "https://www.linkedin.com/in/ayush-kumar-3b9798270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              {" "}
              <AiFillLinkedin className=" text-4xl" />
            </Link>
            <Link
              to={"https://github.com/Ayush-123-byte"}
              className=" p-2 rounded-full  border-gray-300 hover:border-2 "
            >
              <AiOutlineGithub className=" text-4xl" />
            </Link>
          </div>
        </div>
      </div>
      <div id="about" style={mode_change}>
        <p className="section__text__p1" style={mode_change}>
          Get To Know More
        </p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="">
            <div className="about-containers  lg:px-16 px-0 grid md:grid-cols-2 gap-32  grid-cols-1  ">
              <div className="details-container  " style={mode_change1}>
                <PiMedalFill className=" m-auto text-3xl" />
                <h3 className=" text-3xl font-medium">Experience</h3>
                <ul style={mode_change}>
                  <li>Intern at Analaha Capitals for 6 months </li>
                  <li>Intern at Codsoft for 1 month</li>
                  <li>Intern at Bharat Intern for 1 months</li>
                  <li>
                    Intern at Grofkit , a startup company in the field of
                    grocery{" "}
                  </li>
                </ul>
              </div>
              <div className="details-container educa " style={mode_change1}>
                <PiStudentFill className=" m-auto text-3xl" />
                <h3 className=" text-3xl font-medium">Education</h3>
                <p style={mode_change}>
                  10th from Global Acad , samastipur
                  <br />
                  12th from SNNR college chamtha, Begurarai
                  <br />
                  B.Sc. Bachelors Degree from, LNMU, Darbhanga
                  <br />
                </p>
              </div>
            </div>
            <div className="text-container lg:px-20">
              <p style={mode_change}>
                Hello, I'm Ayush, a passionate web developer with a keen eye for
                design and a knack for turning ideas into interactive digital
                experiences. Over the years, I've honed my skills to create
                visually appealing, responsive, and user-friendly websites and
                web applications. <br />
                My journey in web development began with a fascination for
                coding and a commitment to staying at the forefront of this
                ever-evolving field. I specialize in both front-end and back-end
                development, which allows me to craft seamless, end-to-end
                solutions for my clients.
                <br />
                My love for clean, efficient code ensures that the websites and
                applications I build are not only visually stunning but also
                performant and secure. I'm adept at utilizing modern frameworks
                and libraries, like React and Node.js, and I'm constantly
                exploring new technologies to stay ahead of the curve. <br />
                When I'm not immersed in lines of code, I enjoy tackling complex
                challenges, finding innovative solutions, and working
                collaboratively with teams to bring digital visions to life. The
                satisfaction of creating something functional and beautiful from
                scratch is what drives me in this field.
                <br />
                I take great pride in staying up to date with industry trends
                and best practices, and I'm committed to delivering
                high-quality, tailored solutions that exceed client
                expectations. Whether you're a business looking to establish a
                robust online presence or an individual with a unique project in
                mind, I'm here to help you achieve your web development goals.
                <br />
                Let's connect and discuss how I can bring your digital dreams to
                reality. I look forward to working together to create
                outstanding web experiences that make a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="experience">
        <p className="section__text__p1" style={mode_change}>
          Explore My
        </p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="experience-containers lg:px-16 grid md:grid-cols-2 grid-cols-1 gap-32">
            <div className="details-container" style={mode_change1}>
              <h2 className="experience-sub-title" style={mode_change}>
                Frontend
              </h2>
              <div className="article-container ">
                <article>
                  <AiFillHtml5 className=" text-3xl" />
                  <div>
                    <h3>HTML</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
                <article>
                  <BiLogoCss3 className=" text-3xl" />
                  <div>
                    <h3>CSS</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>

                <article>
                  <BiLogoJavascript className=" text-3xl" />
                  <div>
                    <h3>JavaScript</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>

                <article>
                  <BiLogoTailwindCss className=" text-3xl" />
                  <div>
                    <h3>Tailwind</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
                <article>
                  <RiBootstrapFill className=" text-3xl" />
                  <div>
                    <h3>Bootstrap</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
                <article>
                  <BiLogoReact className=" text-3xl" />
                  <div>
                    <h3>React</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container educa " style={mode_change1}>
              <h2 className="experience-sub-title" style={mode_change}>
                Backend
              </h2>
              <div className="article-container">
                <article>
                  <SiMongodb className=" text-3xl" />
                  <div>
                    <h3>MongoDB</h3>
                    <p style={mode_change}>Basic</p>
                  </div>
                </article>
                <article>
                  <BiLogoNodejs className=" text-3xl" />
                  <div>
                    <h3>Node JS</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
                <article>
                  <SiExpress className=" text-3xl" />
                  <div>
                    <h3>Express JS</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
                <article>
                  <AiOutlineGithub className=" text-3xl" />
                  <div>
                    <h3>Git</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
                <article>
                  <TbBrandNextjs className=" text-3xl" />
                  <div>
                    <h3>Next.js</h3>
                    <p style={mode_change}>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects">
        <p className="section__text__p1" style={mode_change}>
          Browse My Recent
        </p>
        <h1 className="title">Projects</h1>
        <div className=" h-[450px] overflow-auto ">
          <Projects />
        </div>
      </div>
      <div id="contact">
        <p className="section__text__p1" style={mode_change}>
          Get in Touch
        </p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <RiMailAddFill className=" text-2xl" />
            <p>
              <Link to="mailto:ayushkumarakt@gmail.com" style={mode_change}>
                ayushkumarakt@gmail.com
              </Link>
            </p>
          </div>
          <div className="contact-info-container">
            <AiFillLinkedin className=" text-2xl" />
            <p>
              <Link
                to="https://www.linkedin.com/in/ayush-kumar-3b9798270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={mode_change}
              >
                LinkedIn
              </Link>
            </p>
          </div>
          <div className="contact-info-container">
            <AiFillInstagram className=" text-2xl" />
            <p>
              <Link
                to="https://www.instagram.com/being_a_07/"
                style={mode_change}
              >
                Instagram
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pfolio;
