import React from "react";
import "../Style/Cv.css";
import ayush from "../assert/pic1.png";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
// import {
//   BiLogoCss3,
//   BiLogoHtml5,
//   BiLogoJavascript,
//   BiLogoMongodb,
//   BiLogoReact,
// } from "react-icons/bi";
import { Link } from "react-router-dom";

function Cv() {
  return (
    <>
      <div className="containercv ">
        <div className="left_Side">
          <div className="profileText">
            <div className="imgBx">
              <img src={ayush} alt="..." />
            </div>
            <h2>
              Ayush kumar
              <br />
              <span>Full-Stak Developer</span>
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title1 text-lg">Contact Info</h3>
            <ul>
              <li>
                <div className="icon ">
                  <BsTelephone />{" "}
                </div>
                <span className="text">6204435048</span>
              </li>
              <li>
                <span className="icon ">
                  <AiOutlineMail />
                </span>
                <span className="text">ayushkumarakt@gmail.com</span>
              </li>
              <li>
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                <span className="text">Tikri street4, Gurgown</span>
              </li>
              <li>
                <span className="icon">
                  <AiFillLinkedin />
                </span>
                <Link to="https://www.linkedin.com/in/ayush-kumar-3b9798270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <span className="text">Linkedin </span>
                </Link>
              </li>
              <li>
                <span className="icon">
                  <AiOutlineGithub />
                </span>
                <Link to="https://github.com/Ayush-123-byte">
                  <span className="text">GitHub </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="contactInfo education">
            <h3 className="title1 text-lg">EDUCATION</h3>
            <ul>
              <li>
                <h5 className=" text-2xl">2017 - 2019</h5>
                <h4> Matriculation</h4>
                <h4>Global vision acad. , Samastipur</h4>
              </li>
              <li>
                <h5 className=" text-2xl">2019 - 2021</h5>
                <h4> Intermediate in Maths</h4>
                <h4>S.N.N.R College, Begusarai</h4>
              </li>
              <li>
                <h5 className=" text-2xl">2021 - Now</h5>
                <h4>Undergraduate in B.sc(Maths)</h4>
                <h4>Lalitnarayan Mithla University</h4>
              </li>
            </ul>
          </div>
          <div className="contactInfo language">
            <h3 className="title1 text-lg">LANGUAGES</h3>
            <ul>
              <li>
                <span className="text">English</span>
                <span className="percent"></span>
                <div style={{ width: "50%" }}></div>
              </li>
              <li>
                <span className="text">Hindi</span>
                <span className="percent"></span>
                <div style={{ width: "80%" }}></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_Side">
          <div className="about">
            <h2 className="title2 text-2xl font-semibold">Profile</h2>
            <p>
              Hello, I'm Ayush, a passionate web developer with a keen eye for
              design and a knack for turning ideas into interactive digital
              experiences. Over the years, I've honed my skills to create
              visually appealing, responsive, and user-friendly websites and web
              applications. <br />
              <br />
              My love for clean, efficient code ensures that the websites and
              applications I build are not only visually stunning but also
              performant and secure. I'm adept at utilizing modern frameworks
              and libraries, like React and Node.js, and I'm constantly
              exploring new technologies to stay ahead of the curve. <br />
              <br />
              Let's connect and discuss how I can bring your digital dreams to
              reality. I look forward to working together to create outstanding
              web experiences that make a lasting impression.
            </p>
          </div>

          <div className="about skills">
            <h2 className="title2  text-2xl font-semibold">
              Professional Skills
            </h2>
            <div className=" text-black">
              - **Programming Languages:** JavaScript, HTML, CSS <br />
              - **Front-End Development:** React, HTML5,CSS3, Webpack <br />
              - **Back-End Technologies:** Node.js, Express <br />
              - **Version Control:** Git, GitHub <br />
              - **Responsive Design:** Bootstrap, Tailwind <br />
              - **Database:** MongoDB, MySQL <br />
              - **UI/UX Design Collaboration** <br />
              - **Problem Solving and Debugging** <br />
            </div>
          </div>
          <div className="About interest">
            <h2 className="title2  text-2xl font-semibold">Interest</h2>
            <ul>
              <li>
                <i className="fa fa-bar-chart" aria-hidden="true"></i>Solo bike
                riding
              </li>
              <li>
                <i className="fa fa-laptop" aria-hidden="true"></i>Developing
              </li>
              <li>
                <i className="fa fa-gamepad" aria-hidden="true"></i>Listening
                music
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true"></i>Writting
              </li>
            </ul>
          </div>
          <div className="about skills mt-6">
            <h2 className="title2  text-2xl font-semibold">Projects</h2>
            <div className=" text-black">
              <h2 className="title3  text-lg ">- Vercel clone</h2>
              <p className=" pl-4">
                This is the clone of vercel app i made this while i was having a
                intern in analaha capital. React and tailwind is used in this
                project
              </p>
              <h2 className="title3  text-lg ">- Notebooki</h2>
              <p className=" pl-4">
                A complete MERN project here i used bootstrap for its frontend
                and express in backend,Here i perform crud operation we can
                excess our notes by login
              </p>
              <h2 className="title3  text-lg ">- Whatbulk</h2>
              <p className=" pl-4">
                A complete MERN project here i used Tailwind for its frontend
                and express in backend,Here i perform crud operation we can
                excess our bulks by login, similar like notebook
              </p>
              <h2 className="title3  text-lg ">- Mininews app</h2>
              <p className=" pl-4">
                In this project i am fetching the data from news Api and
                displaying over page, i made this project by using react and
                bootstrap
              </p>
              <h2 className="title3  text-md ">
                - mini projects like landing page, calculator, carousel and
                many other
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cv;
