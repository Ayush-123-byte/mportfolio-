import React, { useContext, useState } from "react";
import { darkmode } from "../context/Darkmode";

const AddComment = (props) => {
  const [credential, setCredential] = useState({
    comment: "",
    name: "",
  });
  const { mode } = useContext(darkmode);
  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "#4B5560",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleComment = async (e) => {
    e.preventDefault();

    const response = await fetch("https://folio-backend-7ot8.onrender.com/api/auth/addcomment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        comment: credential.comment,
        name:credential.name
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.showAlert(" Thanku for your Comment  ", "success");
    } else {
      props.showAlert("Not able to add Comment", "danger");
    }
    setCredential({
      comment: "",
      name:""
    });
    console.log("contact added");
  };
  return (
    <form className=" mt-24" onSubmit={handleComment}>
      <div className=" flex mb-20 lg:mt-0 md:mb-0  justify-center items-center">
        <div className=" lg:w-1/2 md:h-1/2 w-11/12    ">
          <label
            htmlFor="name"
            className="block rounded-t-lg  p-5 text-3xl font-serif font-medium"
            style={mode_change}
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={credential.name}
            onChange={onChange}
            minLength={3}
            required
            placeholder="Please write your name"
            style={mode_change}
            className="w-full px-4 mt-1 py-4  border rounded-lg focus:outline-none  "
          />

          <label
            htmlFor="comment"
            className="block rounded-t-lg mt-2 p-5 text-3xl font-serif font-medium"
            style={mode_change}
          >
            Comment below
          </label>

          <textarea
            id="comment"
            name="comment"
            rows="10"
            value={credential.comment}
            onChange={onChange}
            minLength={3}
            required
            placeholder="Please add your comment"
            style={mode_change}
            className="w-full px-4 mt-1 py-2 border rounded-lg focus:outline-none  "
          />
          <div className=" flex justify-center p-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg   hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddComment;
