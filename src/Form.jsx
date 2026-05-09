import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"
import PageLinks from "./PageLinks"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Booking from "./Booking"
import { useLocation } from "react-router-dom";

function Form() {
  const location = useLocation();
  const { room, time } = location.state || {};
  const MotionLink = motion.create(Link)
  const form = useRef();
  const lastSentRef = useRef(0);
  const sendEmail = (e) => {
    e.preventDefault();
    const submittedAt = new Date().toISOString();

    const formData = new FormData(form.current);
    formData.append("submitted_at", submittedAt);
    const honeypot = form.current.company.value;
    if (Date.now() - lastSentRef.current < 10000) {
      console.log("You should slow down dang");
      return;
    }

    lastSentRef.current = Date.now();

    if (honeypot) {
      console.log("bot detected");
      return;
    }
    alert("Form submitted!")
  
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,form.current,import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
          <u><p className="muted">
            This helps us match the right tutor and prepare the session. You must book a study room below.
          </p></u>
          <h5>THE ONLY TIMES WE COME ARE 12-5 PM ON WEEKDAYS</h5>
          

          <form ref = {form}id="tutorForm" onSubmit={sendEmail}>
            <input type="text" name = "name" placeholder="FULL Student Name" required/>
            <input type="text" name = "grade" placeholder="Grade Level" required/>
            <input type="text" name = "subject" placeholder="Subject Needed (Math, Science, Coding)" required/>
            <textarea name = "known" placeholder="How far along is your student and what do they need?"></textarea>
            <textarea name = "fun" placeholder="What are some personal interests of your student?"></textarea>
            <input type="email" name = "parent_email" placeholder="Parent Email" required/>
            <input type="tel" name = "parent_number" placeholder="Parent Number(123-456-7890)" required/>
            <input type="text" name= "extra" placeholder="Is there else anything we should know? (Allergies, conditions, times, schedules, etc)"/>
            <input type="hidden" name="room" value={room || ""} />
            <input type="hidden" name="time" value={time || ""} />
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
            
            <motion.button whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}} type="submit" className = "btn-primary">Submit</motion.button>
          </form>

          <p>We’ll reach out within 1 business day.</p>
     
          <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}}to="/"   className="btn-primary">
            Back to Home
          </MotionLink>
        </div>
      </section>
      
      <footer className="footer">© 2026 Inspiration Initiative</footer>
    </div>
  );
}

export default Form;