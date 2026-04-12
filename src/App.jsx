import { Link } from "react-router-dom";
import "./App.css";
import { motion, useSpring, useScroll } from "motion/react"
import PageLinks from "./PageLinks"
import ScrollReveal from "./ScrollReveal"
import { useEffect } from 'react';
import Typewriter from "typewriter-effect"

function App() {
  const MotionLink = motion.create(Link);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);
  return (
    <div className="page">
      <div className="container">
        <PageLinks/>

        <ScrollReveal>
        <section className="hero">
          <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Better Grades Over the Summer.
</motion.h2>
          <p>
            1-on-1 tutoring for K–7 students in Math, Science, and Coding.
          </p>
          <p>Taught by local students who understand.</p>

          <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}}  to="/form" className="btn-primary">
            Book a Session
          </MotionLink>

          <div className="trust">
            Allen, TX •  Personalized learning •  Flexible scheduling
          </div>
        </section>
        </ScrollReveal>
        <ScrollReveal>
        <section className="section">
          <h3>What We Teach</h3>

          <div className="grid">
            <div className="card">
              <h4>Math</h4>
              <p>Learn concepts and build understanding in math by tutors who competed in top level competitions such as TMSCA and MATHCOUNTS.</p>
            </div>

            <div className="card">
              <h4>Science</h4>
              <p>Understanding concepts in the scientific field with some of the best tutors in the state.</p>
            </div>

            <div className="card">
              <h4>Coding</h4>
              <p>Build real skills in programming and logic.</p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="section alt">
          <h3>How It Works</h3>

          <div className="steps">
            <div>1. Choose a tutor</div>
            <div>2. Book a time</div>
            <div>3. Start learning</div>
          </div>
        </section>
      </ScrollReveal>
        <section className="cta">
          <h2>Ready to improve your grades?</h2>
          <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}}to="/form" className="btn-primary">
            Get Started
          </MotionLink>
        </section>

        <footer className="footer">
          © 2026 Allen Tutoring
        </footer>
      </div>
    </div>
  );
}

export default App;