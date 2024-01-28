import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { darkmode } from "../context/Darkmode";

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  let navigate= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://folio-backend-7ot8.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert(" Logged in Successfully", "success");
      navigate("/");
    } else {
      props.showAlert(" Invalid Details", "danger");
    } 
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };


  const { mode } = useContext(darkmode);

  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "black",
    boxShadow:mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };

  return (
    <div style={mode_change} className="  flex items-center rounded-lg mt-20 justify-center lg:w-1/2 sm:w-11/12 w-11/12 m-auto  bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className=" w-11/12 space-y-8">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold ">
            Login
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={onChange}
                value={credential.email}
                className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={onChange}
                value={credential.password}
                autoComplete="current-password"
                required
                className="appearance-none mt-4 rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

     



    </div>
  );
};

export default Login;
