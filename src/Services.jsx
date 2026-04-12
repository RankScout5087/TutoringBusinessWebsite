
import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"
import PageLinks from "./PageLinks"
import ScrollReveal from "./ScrollReveal";


function Services() {
  const MotionLink = motion.create(Link)
  return (
    <div className="page">
      <PageLinks/>
      

      <section className="hero small-hero ">
        <motion.h2 className="emphasis"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>What We Offer.
</motion.h2>
        <p>Simple, focused tutoring that actually improves understanding.</p>
      </section>

      <ScrollReveal><section className="section">
        <div className="grid">
          
            <div className="card">
            <h3>Math</h3>
            <p>We offer mentorship in mathematics, ranging from K-7 and 7th grade to beyond. Our curriculum, dependent on your students' needs, explores mathematics through developing a sense of interest in the complexities of the subject. We offer more than just formulas or factors; we offer critical thinking, reasoning, and the analysis alongside it that thoroughly covers the subject beyond the standard tutoring. Otherwise, we offer different sessions sensitive to your students' needs.</p>
          </div>

          <div className="card">
            <h3>Science</h3>
            <p>At Allen Tutoring, we explore the scientific arts ranging from physics, to biology, to chemistry, and more! Our curriculum focuses on concept clarity over memorization to expand comphrension and memory retainment. Through utilizing the best study methods availble, we believe that we can educate students about our world.</p>
          </div>

          <div className="card">
            <h3>Coding</h3>
            <p>We explore the vast realm of computer science with our students, teaching the basics of coding. We teach subjects such as variables, booleans, if-then, and other concepts, going up to algorithm sorting and website design. We teach logic, problem-solving, and bolster creativity through Python and JavaScript basics.</p>
          </div>
          
        </div>
      </section></ScrollReveal>


      <section className="cta">
        <h2>Not sure what you need?</h2>
        <p>We’ll help you figure it out in the first session.</p>

        <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}}to="/form" className="btn-primary">
          Book a Session
        </MotionLink>
      </section>

      <footer className="footer">© 2026 Allen Tutoring</footer>
    </div>
  );
}

export default Services;