import React from "react";
import "../Style/porthome.css";

function Porthome() {
  return (
    <div>
      <div id="main">
        <div id="page">
          <div id="nav">
            <img src="./logo.jpg" />
            <div class="sidebar">
              <input type="checkbox" id="check" />
              <a href="#" id="nav-toggle">
                <i class="ri-menu-fold-line"></i>
              </a>
              <div id="center-nav">
                <ul>
                  <li>
                    <a href="#page" class="links">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#page1" class="links">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#page2" class="links">
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a href="#page3" class="links">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#page4" class="links">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="front">
            <div id="text">
              <h5>Hey!</h5>
              <h1>
                There, <br /> I'm Shruti. <br /> Web Developer
              </h1>
              <br />
              <h4>
                -- "Weaving innovation through code, a web developer crafts the
                digital tapestry of tomorrow."
              </h4>
              <div id="buttons">
                <form
                  action="https://www.linkedin.com/in/shru2003/"
                  target="_blank"
                >
                  <button id="linkedIn">
                    <span>LinkedIn</span> <i class="ri-linkedin-box-fill"></i>
                  </button>
                </form>
                <form action="https://github.com/shru2811" target="_blank">
                  <button id="github">
                    <span>Github </span>
                    <i class="ri-github-fill"></i>
                  </button>
                </form>
                <form
                  action="https://leetcode.com/leetcode_shruti/"
                  target="_blank"
                >
                  <button id="leetcode">
                    <span>Leetcode</span> <i class="ri-code-box-fill"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="me">
              <img src="./page.jpg" alt=" " />
            </div>
          </div>
        </div>
        <div id="page1">
          <div id="left">
            <div class="text">
              <h1>So, Who Am I?</h1>
              <p>
                Welcome! I'm Shruti Srivastava, a sophomore studying BTech in
                Computer Science majoring in Big Data at the University of
                Petroleum and Energy Studies, Dehradun. I started coding in 11th
                grade, fell in love with Python, and decided to pursue coding
                professionally. After school, I chose computer science
                engineering and got into UPES in 2022 after a gap year of
                preparation. I've learned C, Python, Java, HTML, CSS, and JS in
                my first year and continue to study Data Structures using Java,
                Full Stack Web Development, and Big Data. I'm also a passionate
                Graphic Designer using Canva, with an year's experience
                designing posters for my university's Student Chapter. Find my
                design services on Fiverr, or reach me through LinkedIn or
                Email. I've built this website and offer frontend web
                development services. Thanks for visiting!
              </p>
              <form
                action="https://drive.google.com/file/d/12RdM7S3KGD0Sp9-Rhiy68_YxCtet79Bq/view?usp=sharing"
                target="_blank"
              >
                <button>
                  Download CV <i class="ri-article-line"></i>
                </button>
              </form>
            </div>
          </div>
          <div id="right">
            <img src="./about.jpg" />
          </div>
        </div>
        <div id="page2">
          <h1>Tech Stack</h1>
          <div class="sections">
            <div class="section s1">
              <div class="title">
                <h2>Languages</h2>
              </div>
              <div class="contents">
                <div class="content">
                  <h4>C Programming</h4>
                  <p>
                    Proficient in C, leveraging low-level programming skills and
                    algorithms.
                  </p>
                  <br />
                </div>
                <div class="content">
                  <h4>Python Programming</h4>
                  <p>
                    Versatile Python developer, currently exploring
                    applications, scripting, and data analysis.
                  </p>
                  <br />
                </div>
                <div class="content">
                  <h4>Java Programming</h4>
                  <p>
                    Java enthusiast, mastering{" "}
                    <b>object-oriented programming</b> and honing skills in
                    application development.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div class="section s2">
              <div class="title">
                <h2>Web Technologies</h2>
              </div>
              <div class="contents">
                <div class="content">
                  <h4>Front-End Development</h4>
                  <p>
                    <b>HTML/CSS:</b>
                    <br />
                    Proficient in building structured and visually appealing web
                    pages using HTML and CSS.
                    <br />
                    <b>JavaScript:</b>
                    <br />
                    Actively developing dynamic and interactive user interfaces
                    with JavaScript.
                    <br />
                    <b>React.js:</b>
                    <br />
                    Learning and implementing React.js for building modern and
                    scalable frontend applications.
                  </p>
                </div>
                <div class="content">
                  <h4>Backend Development</h4>
                  <p>
                    <b>Node.js:</b>
                    <br />
                    Currently exploring and utilizing Node.js for server-side
                    development.
                    <br />
                    <b>Express.js:</b>
                    <br />
                    Building robust and efficient APIs using Express.js to
                    support backend functionalities.
                  </p>
                </div>
                <div class="content">
                  <h4>Database</h4>
                  <p>
                    <b> MySQL:</b>
                    <br />
                    Implementing and managing relational databases with MySQL.
                    <br />
                    <b>MongoDB:</b>
                    <br />
                    Exploring MongoDB for NoSQL database solutions, enhancing
                    data storage capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page3">
          <div class="cols">
            <div class="row v1">
              <div class="projects">
                <h1>
                  Latest <br /> Projects
                </h1>
                <h4>Click on the arrows for source code.</h4>
              </div>
              <div class="v">
                <div class="heading">
                  <h3>To Do List</h3>
                  <form
                    action="https://github.com/shru2811/To-Do-List-WebDev"
                    target="_blank"
                  >
                    <button>
                      {" "}
                      <i class="ri-arrow-right-up-line"></i>
                    </button>
                  </form>
                </div>
                <video width="400" height="200" controls>
                  <source src="./todo dev.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div class="row v2">
              <div class="heading">
                <h3>Spotify Clone</h3>
                <form
                  action="https://github.com/shru2811/Spotify-Clone"
                  target="_blank"
                >
                  <button>
                    {" "}
                    <i class="ri-arrow-right-up-line"></i>
                  </button>
                </form>
              </div>
              <video width="400" height="200" controls>
                <source src="./3.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="row v3">
              <div class="heading">
                <h3>Hospital Management System</h3>
                <form
                  action="https://github.com/shru2811/Hospital_Management_system"
                  target="_blank"
                >
                  <button>
                    {" "}
                    <i class="ri-arrow-right-up-line"></i>
                  </button>
                </form>
              </div>
              <video width="400" height="200" controls>
                <source
                  src="./hospital management system.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div id="page4">
          <div class="contact">
            <h1>
              Contact Me!
              <hr />
            </h1>
            <h4>
              Feel free to reach out for any inquiries, collaboration
              opportunities, or just to say hello! I'm always excited to connect
              with fellow enthusiasts and professionals.
            </h4>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              class="connect"
            >
              <input
                type="hidden"
                name="access_key"
                value="cc9452c1-1925-457e-b41e-a5f71dcfb57b"
              />
              <input
                type="text"
                name="username"
                placeholder="Your name"
                class="inputs"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="inputs"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <button type="submit">
                Submit <i class="ri-arrow-right-line"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porthome;
