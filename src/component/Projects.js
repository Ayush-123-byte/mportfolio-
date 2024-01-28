import React, { useContext, useEffect } from "react";
import notebook from "../assert/notebook.png";
import bulk from "../assert/bulk.png";
import vercel from "../assert/vercel1.png";
import { Link, useNavigate } from "react-router-dom";
import { darkmode } from "../context/Darkmode";

export default function Projects() {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/about')
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  const arr = [
    {
      img: vercel,
      title: "Vercel",
      about:
        "This is the clone of vercel app. only demonstrating the frontend part backend part will be added later  ",
      demo: "https://velvet1.vercel.app/",
    },
    {
      img: notebook,
      title: "Notebook",
      about:
        "Notebook a demo of a mern project. Here you can store your notes and access it any time and you can perform curd operation ",
      demo: "https://f-notebook.vercel.app/login",
    },
    {
      img: bulk,
      title: "Whatbulk",
      about:
        " Whatbulk again a demo of a mern app and it is bit similar to note book you and preform crud operation here and store your files.",
      demo: "https://bulk-f.vercel.app/",
    },
  ];

  const { mode } = useContext(darkmode);
  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "#4B5560",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };
  const mode_change1 = {
    color: mode === "dark" ? "white" : "#4B5560",
  };

  return (
    <>
      <div className=" mt-10 grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 m-auto w-11/12 gap-6">
        {arr.map((ele, ind) => (
          <div
            className="block  rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
            style={mode_change}
          >
            <Link to="/">
              <img className="rounded-t-lg  m-auto" src={ele.img} alt="img" />
            </Link>
            <hr className=" mt-4" />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight ">
                {ele.title}
              </h5>
              <p className="mb-4 text-base" style={mode_change1}>
                {ele.about}
              </p>
              <div className="flex flex-wrap space-y-2 gap-x-2">
              <Link to="https://github.com/Ayush-123-byte">
                <button
                  type="button"
                  className=" mt-2 inline-block bg-blue-600 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  GitHub
                </button>
              </Link>
              <Link to={ele.demo}>
                <button
                  type="button"
                  className="inline-block bg-blue-600 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Live Demo
                </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
