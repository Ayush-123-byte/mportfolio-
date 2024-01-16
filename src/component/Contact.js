import React, { useContext } from "react";
import { darkmode } from "../context/Darkmode";
// import { useNavigate } from 'react-router-dom';

function Contact() {
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //     navigate('/contact');
  //    }
  //    else{
  //     navigate("/login")
  //   }    // eslint-disable-next-line
  // }, []);

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
    <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center">
      <div
        className=" rounded-lg shadow-lg p-8 max-w-2xl w-full"
        style={mode_change}
      >
        <h2 className="text-3xl font-semibold  mb-4" style={mode_change1}>
          Get in Touch
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block  font-medium"
              style={mode_change1}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block   font-medium"
              style={mode_change1}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block   font-medium"
              style={mode_change1}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
