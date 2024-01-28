import React, { useContext, useEffect, useState } from "react";
import { darkmode } from "../context/Darkmode";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function Contact(props) {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/contact");
    } else {
      navigate("/login");
    } // eslint-disable-next-line
  }, []);

  const [credential, setCredential] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleContact = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://folio-backend-7ot8.onrender.com/api/auth/createcontact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: credential.name,
          email: credential.email,
          message: credential.message,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.showAlert(" I will try to get you soon  ", "success");
    } else {
      props.showAlert(" Already you sent a message", "danger");
    }
    setCredential({
      name: "",
      email: "",
      message: "",
    });
    console.log("contact added");
  };

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
        <form onSubmit={handleContact}>
          <div className="mb-4">
            <label htmlFor="name" className="block  font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={credential.name}
              onChange={onChange}
              minLength={3}
              required
              style={mode_change}
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
              value={credential.email}
              onChange={onChange}
              minLength={3}
              required
              style={mode_change}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block   font-medium"
              style={mode_change}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={credential.message}
              onChange={onChange}
              minLength={3}
              required
              style={mode_change}
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
