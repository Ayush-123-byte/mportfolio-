import React, { createContext, useState } from 'react'
const darkmode=createContext();
function Darkmode(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#313645";
      document.body.style.color = "white ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "black ";

    }
  };
  return (
    <darkmode.Provider value={{mode,toggleMode}}>
      {props.children}
    </darkmode.Provider>
    )
}

export default Darkmode
export {darkmode};