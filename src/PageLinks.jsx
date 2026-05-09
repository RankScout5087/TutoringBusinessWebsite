import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function PageLinks() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

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
          
          <h1 className="main_logo">Inspiration Initiative</h1>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Animated menu */}
          <motion.nav
            className="nav-links"
            initial={false}
            animate={{
              height: open ? "auto" : 0,
              opacity: open ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <Link to="/" className="btn-link">Home</Link>
            <Link to="/services" className="btn-link">Services</Link>
            <Link to="/booking" className="btn-link">Get Started</Link>
            <Link to="/tutors" className="btn-link">Our Tutors</Link>
          </motion.nav>

        </header>
      </div>
    </div>
  );
}