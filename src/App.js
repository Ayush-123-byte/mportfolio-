import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pfolio from "./component/Pfolio";
// import Home from './component/Home';
import Footer from "./component/Footer";
import Cv from "./component/Cv";
import Contact from "./component/Contact";
import About from "./component/About";
import Alert from "./component/Alert";
import { useState } from "react";
import Home from "./component/Home";
import Darkmode from "./context/Darkmode";
import Nav from "./component/Nav";
import Projects from "./component/Projects";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AddComment from "./component/AddComment";
import ReviewComment from "./component/ReviewComment";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Darkmode>
        <Router>
          <Nav showAlert={showAlert} />
          {/* <Navbar showAlert={showAlert} /> */}
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pfolio" element={<Pfolio />} />
            <Route
              exact
              path="/comment"
              element={<AddComment showAlert={showAlert} />}
            />
            <Route
              exact
              path="/review"
              element={<ReviewComment showAlert={showAlert} />}
            />
            <Route exact path="/cv" element={<Cv />} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/contact"
              element={<Contact showAlert={showAlert} />}
            />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </Router>
      </Darkmode>
    </>
  );
}

export default App;
