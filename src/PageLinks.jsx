import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react";

export default function PageLinks() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`header ${stuck ? "stuck" : ""}`}>
      <div className="card">
        <header className="nav">
          <h1 className="logo">Star Student Schooling</h1>

          <nav className="nav-links">
            <Link to="/" className="btn-link">Home</Link>
            <Link to="/services" className="btn-link">Services</Link>
            <Link to="/booking" className="btn-link">Get Started</Link>
            <Link to="/tutors" className="btn-link">Our Tutors</Link>
          </nav>
        </header>
      </div>
    </div>
  );
}