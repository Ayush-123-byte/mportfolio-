// Project.js

import React from "react";

const Project = () => {
  const myprojects = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      title: "myportfolio",
      description: "description",
      projectUrl: "ayush",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      title: "myportfolio",
      description: "description",
      projectUrl: "ayush",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      title: "myportfolio",
      description: "description",
      projectUrl: "ayush",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      title: "myportfolio",
      description: "description",
      projectUrl: "ayush",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      title: "myportfolio",
      description: "description",
      projectUrl: "ayush",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      title: "myportfolio",
      description: "description",
      projectUrl: "ayush",
    },
  ];
  return (
    <>
    <h1 className=" text-4xl font-bold text-center p-10">Projects</h1>
      <div className=" grid p-5 lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mx-auto ">
        {myprojects.map((tech) => (
          <div className=" rounded mx-auto overflow-hidden shadow-lg w-11/12  bg-white ">
            <>
              <img
                className="w-full h-48 object-cover"
                src={tech.imageUrl}
                alt={tech.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tech.title}</div>
                <p className="text-gray-700 text-base">{tech.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tech.title}
                </span>
              </div>
              <div className="px-6 pb-4">
                <a
                  href={tech.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
