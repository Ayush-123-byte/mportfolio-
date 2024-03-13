import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { darkmode } from "../context/Darkmode";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Nav = (props) => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Comment", link: "/comment" },
    { name: "Read Comments", link: "/review" },
  ];
  let [open, setOpen] = useState(false);
  // let navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  //   props.showAlert(" Log out Successfully", "success");
  // };
  const { mode, toggleMode } = useContext(darkmode);
  return (
    <>
      <div className="shadow-md w-full font-serif  fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-gray-900 md:py-0 py-4 md:px-10 px-7">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-gray-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-10 " : "top-[-490px]"
            }`}
          >
            <li className=" w-32 md:mt-0  mt-10 text-white">
              <img src="logo1.png" alt="" />
            </li>
            {Links.map((link,ind) => (
              
                <div
                  key={ind}
                  className="md:ml-8 ml-10 text-xl md:my-0 my-5"
                >
                  <Link
                    to={link.link}
                    className=" text-white hover:text-gray-400 duration-500"
                  >
                    <div onClick={() => setOpen(!open)}>{link.name}</div>
                  </Link>
                </div>
            
            ))}
          </ul>
          <div className=" flex items-center justify-between gap-3">
            <button
              onClick={() => setOpen(!open)}
              className="text-3xl border rounded-md p-1  text-white top-5 cursor-pointer md:hidden"
            >
              <CiMenuBurger name={open ? "close" : "menu"}></CiMenuBurger>
            </button>
            <div
              onClick={toggleMode}
              className=" cursor-pointer text-2xl text-white"
            >
              {mode === "light" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )}
            </div>
            {/* <div className=" flex items-center gap-3 flex-wrap">
              {!localStorage.getItem("token") ? (
                <div>
                  <Link className="text-white hover:text-blue-200" to="/login">
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Login
                    </button>
                  </Link>
                  <Link
                    className="text-white ml-6 hover:text-blue-200"
                    to="/signup"
                  >
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleLogout}
                  type="button"
                  className="inline-block  rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Log out
                </button>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
