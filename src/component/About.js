import React, { useContext } from "react";
import { darkmode } from "../context/Darkmode";
// import { useNavigate } from "react-router-dom";

function About() {
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     navigate('/about')
  //   }
  //   else{
  //     navigate('/login')
  //   }
  //   // eslint-disable-next-line
  // }, []);

  const { mode } = useContext(darkmode);
  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "#4B5560",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div
        className=" rounded-lg shadow-lg p-8 max-w-4xl w-full text-center"
        style={mode_change}
      >
        <h2 className="text-3xl font-semibold  mb-4">About Us</h2>
        <p className="    mb-6" style={mode_change}>
          About Me - Web Developer Hello, I'm Ayush, a passionate web developer
          with a keen eye for design and a knack for turning ideas into
          interactive digital experiences. Over the years, I've honed my skills
          to create visually appealing, responsive, and user-friendly websites
          and web applications.
        </p>
        <p className="    mb-6" style={mode_change}>
          My journey in web development began with a fascination for coding and
          a commitment to staying at the forefront of this ever-evolving field.
          I specialize in both front-end and back-end development, which allows
          me to craft seamless, end-to-end solutions for my clients.
        </p>
        <p className="    mb-6" style={mode_change}>
          My love for clean, efficient code ensures that the websites and
          applications I build are not only visually stunning but also
          performant and secure. I'm adept at utilizing modern frameworks and
          libraries, like React and Node.js, and I'm constantly exploring new
          technologies to stay ahead of the curve.
        </p>
        <p className="    mb-6" style={mode_change}>
          When I'm not immersed in lines of code, I enjoy tackling complex
          challenges, finding innovative solutions, and working collaboratively
          with teams to bring digital visions to life. The satisfaction of
          creating something functional and beautiful from scratch is what
          drives me in this field.
        </p>
        <p className="    mb-6" style={mode_change}>
          I take great pride in staying up to date with industry trends and best
          practices, and I'm committed to delivering high-quality, tailored
          solutions that exceed client expectations. Whether you're a business
          looking to establish a robust online presence or an individual with a
          unique project in mind, I'm here to help you achieve your web
          development goals.
        </p>
        <p className="    mb-6" style={mode_change}>
          Let's connect and discuss how I can bring your digital dreams to
          reality. I look forward to working together to create outstanding web
          experiences that make a lasting impression.
        </p>
      </div>
    </div>
  );
}

export default About;
