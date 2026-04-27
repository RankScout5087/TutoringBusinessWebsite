import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"
import PageLinks from "./PageLinks"
import { useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import Form from "./Form"

function Booking() {
  const MotionLink = motion.create(Link)
  const form = useRef();
  const [room, setRoom] = useState("");
  const [time, setTime] = useState("");

  
  return (
    <div className="page">
      <PageLinks/>

      <section className="hero small-hero ">
        <motion.h2 className="emphasis"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Get Started.
</motion.h2>
        
        <p>Tell us about the student so we can personalize the session.</p>
      </section>

      <section className="section">
        <div className="form-card">
          <h3>Student Intake Form</h3>
          <p className="muted">
            This helps us match the right tutor and prepare the session. You must book a study room below.
          </p>
          <h5>THE ONLY TIMES WE COME ARE 12-5 PM ON WEEKDAYS</h5>
          <iframe
              src="https://cityofallen.libcal.com/spaces"
              title="Allen Public Library Study Rooms"
              style={{
                width: "95%",
                height: "500px",
                border: "none",
                display: "block",
                margin: "0 auto",
                padding: "20px",
              }}
            />


          <form ref = {form}id="tutorForm">
            <input type="text" value = {room} onChange={(e) => setRoom(e.target.value)} placeholder="What Study Room did you book?" required/>
            <input type="text" value={time}
  onChange={(e) => setTime(e.target.value)} placeholder="From what times did you book?" required/>
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px"
              }}
            />
            
            <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}} to="/form"z state={{ room, time }} className = "btn-primary">Next Step</MotionLink>
          </form>

          <p>We’ll reach out within 1 business day.</p>
     
          <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}}to="/"   className="btn-primary">
            Back to Home
          </MotionLink>
        </div>
      </section>
      
      <footer className="footer">© 2026 Allen Tutoring</footer>
      
    </div>
    
  );
}

export default Booking;
