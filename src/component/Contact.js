import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/contact');
     }
     else{
      navigate("/login")
    }    // eslint-disable-next-line
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-medium">Message</label>
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
