import React from "react";
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
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
          About Me - Web Developer Hello, I'm Ayush, a passionate web developer
          with a keen eye for design and a knack for turning ideas into
          interactive digital experiences. Over the years, I've honed my skills
          to create visually appealing, responsive, and user-friendly websites
          and web applications.
        </p>
        <p className="text-gray-600 mb-6">
          My journey in web development began with a fascination for coding and
          a commitment to staying at the forefront of this ever-evolving field.
          I specialize in both front-end and back-end development, which allows
          me to craft seamless, end-to-end solutions for my clients.
        </p>
        <p className="text-gray-600 mb-6">
          My love for clean, efficient code ensures that the websites and
          applications I build are not only visually stunning but also
          performant and secure. I'm adept at utilizing modern frameworks and
          libraries, like React and Node.js, and I'm constantly exploring new
          technologies to stay ahead of the curve.
        </p>
        <p className="text-gray-600 mb-6">
          When I'm not immersed in lines of code, I enjoy tackling complex
          challenges, finding innovative solutions, and working collaboratively
          with teams to bring digital visions to life. The satisfaction of
          creating something functional and beautiful from scratch is what
          drives me in this field.
        </p>
        <p className="text-gray-600 mb-6">
          I take great pride in staying up to date with industry trends and best
          practices, and I'm committed to delivering high-quality, tailored
          solutions that exceed client expectations. Whether you're a business
          looking to establish a robust online presence or an individual with a
          unique project in mind, I'm here to help you achieve your web
          development goals.
        </p>
        <p className="text-gray-600 mb-6">
          Let's connect and discuss how I can bring your digital dreams to
          reality. I look forward to working together to create outstanding web
          experiences that make a lasting impression.
        </p>
      </div>
    </div>
  );
}

export default About;
