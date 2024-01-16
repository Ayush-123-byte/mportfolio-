import React from "react";
import { Link } from "react-router-dom";
import Project from "../landing/Projects";

function Landing() {
  return (
    <>
    <div>
      <section className=" flex justify-around items-center flex-wrap ">
        <img
          className=" w-96 h-96  rounded-full"
          src="https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Ayush kumar</h1>
          <p className="text-lg mb-8">Web Developer | UI/UX Designer</p>
          <p className="text-gray-400 mb-8">
            Welcome to my portfolio. I specialize in creating responsive and
            user-friendly web applications.
          </p>
          <div className="flex justify-center">
            <Link
              to="https://github.com/yourusername"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-4"
            >
              GitHub
            </Link>
            <Link
              to="https://linkedin.com/in/yourusername"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>


    </div>
      <Project/>
      </>
  );
}

export default Landing;
