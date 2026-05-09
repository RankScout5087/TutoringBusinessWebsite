import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function PageLinks() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (mobile) setOpen(false);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className={`header ${stuck ? "stuck" : ""}`}>
      <div className="big-card">
        <header className="nav">
          <h1 className="main_logo">Inspiration Initiative</h1>

          {!isMobile && (
            <nav className="nav-links desktop">
              <Link to="/" className="btn-link">Home</Link>
              <Link to="/services" className="btn-link">Services</Link>
              <Link to="/booking" className="btn-link">Get Started</Link>
              <Link to="/tutors" className="btn-link">Our Tutors</Link>
            </nav>
          )}

          {isMobile && (
            <button
              className="menu-button"
              onClick={() => setOpen(prev => !prev)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </header>

        {isMobile && (
          <motion.nav
            className="nav-links mobile"
            initial={false}
            animate={{
              height: open ? "auto" : 0,
              opacity: open ? 1 : 0,
              scaleY: open ? 1 : 0
            }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              transformOrigin: "top"
            }}
          >
            <Link to="/" className="btn-link" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" className="btn-link" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/booking" className="btn-link" onClick={() => setOpen(false)}>Get Started</Link>
            <Link to="/tutors" className="btn-link" onClick={() => setOpen(false)}>Our Tutors</Link>
          </motion.nav>
        )}
      </div>
    </div>
  );
}