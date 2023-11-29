import React from "react";
import "../Style/Cv.css";
import ayush from "../assert/pic1.jpg";
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
              My journey in web development began with a fascination for coding
              and a commitment to staying at the forefront of this ever-evolving
              field. I specialize in both front-end and back-end development,
              which allows me to craft seamless, end-to-end solutions for my
              clients.
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
              I take great pride in staying up to date with industry trends and
              best practices, and I'm committed to delivering high-quality,
              tailored solutions that exceed client expectations. Whether you're
              a business looking to establish a robust online presence or an
              individual with a unique project in mind, I'm here to help you
              achieve your web development goals.
              <br />
              Let's connect and discuss how I can bring your digital dreams to
              reality. I look forward to working together to create outstanding
              web experiences that make a lasting impression.
            </p>
          </div>
          <div className="about">
            <h2 className="title2  text-2xl font-semibold">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2019 - 2021</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Senior Web Developer</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro exercitationem nesciunt, tenetur architecto omnis{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>2021 - present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Data Analyist</h4>
                <p>
                  Lorem ipsum,dolor sit amet consectetur adipisicing elit. Porro
                  exercitationem nesciunt,tenetur architecto omnis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="about skills">
            <h2 className="title2  text-2xl font-semibold">
              Professional Skills
            </h2>
            <div className=" text-black">
            - **Programming Languages:** JavaScript, HTML, CSS <br />
            - **Front-End Development:** React, Redux, HTML5, CSS3, SASS/SCSS,
            Webpack <br />
            - **Back-End Technologies:** Node.js, Express <br />
            - **Version Control:** Git, GitHub <br />
            - **Responsive Design:** Bootstrap, Tailwind <br />
            - **Database:** MongoDB, MySQL <br />
            {/* - **Testing:** Jest, Enzyme <br /> */}
            {/* - **Build Tools:** Babel, ESLint <br /> */}
            {/* - **Agile Methodologies:** Scrum, Kanban <br /> */}
            - **UI/UX Design Collaboration** <br />
            - **Problem Solving and Debugging** <br />
            </div>
          </div>
          <div className="About interest">
            <h2 className="title2  text-2xl font-semibold">Interest</h2>
            <ul>
              <li>
                <i className="fa fa-bar-chart" aria-hidden="true"></i>Trading
              </li>
              <li>
                <i className="fa fa-laptop" aria-hidden="true"></i>Developing
              </li>
              <li>
                <i className="fa fa-gamepad" aria-hidden="true"></i>Gaming
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true"></i>Business
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cv;
