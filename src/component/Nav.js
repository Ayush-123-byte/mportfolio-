import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { darkmode } from "../context/Darkmode";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Nav = (props) => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  // let navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  //   props.showAlert(" Log out Successfully", "success");
  // };
  const {mode, toggleMode } = useContext(darkmode);
  return (
    <>
    <div className="shadow-md w-full font-serif  fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-900  py-4 md:px-10 px-7">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 text-white top-5 cursor-pointer md:hidden"
        >
          <CiMenuBurger name={open ? "close" : "menu"}></CiMenuBurger>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-gray-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className=" text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
          <div onClick={toggleMode} className=" text-2xl text-white">
            {mode==="light"?<MdOutlineDarkMode/>:<MdOutlineLightMode/>}
          {/* <MdOutlineLightMode/> */}
        </div>
       </div>
      </div>
      
    
    </>
  );
};

export default Nav;
