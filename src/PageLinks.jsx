import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"

export default function AppRoutes() {

  return (
    <div className="header">
        <div className="card">
        <header className="nav">
            <h1 className="logo">Allen Tutoring</h1>

        <nav className="nav-links">
            
            <Link to="/" className="btn-link">Home</Link>
            <Link to="/services" className="btn-link">Services</Link>
            <Link to="/form" className="btn-link">
                Get Started
            </Link>
            </nav>

      </header> </div></div>
  );
}