import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/Loader/Loader";
import Portfolio from "./components/Portfolio/Portfolio";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating loading for 1 second. Adjust as needed.

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ToastContainer position="bottom-right" />
      {/* Place ToastContainer here */}
      <Router>
        {!loading && <Navbar />} {/* Render navbar only if not loading */}
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <CSSTransition
                in={!loading}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <Home />
              </CSSTransition>
            }
          />
          <Route
            path="/about"
            element={
              <CSSTransition
                in={!loading}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <About />
              </CSSTransition>
            }
          />
          <Route
            path="/services"
            element={
              <CSSTransition
                in={!loading}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <Services />
              </CSSTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <CSSTransition
                in={!loading}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <Contact />
              </CSSTransition>
            }
          />
           <Route
            path="/portfolio"
            element={
              <CSSTransition
                in={!loading}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <Portfolio />
              </CSSTransition>
            }
          />
        </Routes>
        {!loading && <Footer />}
        {loading && <LoadingSpinner />}{" "}
        {/* Display loading spinner while loading */}
      </Router>
    </div>
  );
}

export default App;
