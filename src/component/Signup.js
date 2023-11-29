// Signup.js

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { darkmode } from "../context/Darkmode";

const Signup = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login");
      props.showAlert(" Account Created Successfully", "success");
    } else {
      props.showAlert(" Invalid Credentials", "danger");

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
    <div   className="flex items-centerz justify-center  mt-20">
      <div className="lg:w-1/2 sm: w-11/12 " >
        <form
          className=" shadow-md rounded mb-4 p-5"
          onSubmit={handleSubmit}
          style={mode_change}
        >
          <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold ">
          SignUp
          </h2>
          <div className="mb-4 w-11/12 m-auto">
            <label
              className="block   text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={credential.name}
              onChange={onChange}
              minLength={3}
              required
            />
          </div>
          <div className="mb-4  w-11/12 m-auto ">
            <label
              className="block   text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 w-full  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
              value={credential.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-6  w-11/12 m-auto ">
            <label
              className="block   text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 w-full   leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              minLength={5}
              required
              value={credential.password}
              onChange={onChange}
            />
          </div>
          <div className="flex items-center justify-between">
          <button
              type="submit"
              className="group  w-10/12 m-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
