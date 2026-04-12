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
            
            <Link to="/" className="btn-small">Home</Link>
            <Link to="/services" className="btn-small">Services</Link>
            <Link to="/form" className="btn-small">
                Get Started
            </Link>
            </nav>

      </header> </div></div>
  );
}