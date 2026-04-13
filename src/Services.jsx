import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"
import PageLinks from "./PageLinks"
import ScrollReveal from "./ScrollReveal";
import ScrollCards from "./ScrollCards";

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
      <ScrollReveal>
      <div className="form-card">
        <h3>Questions and Answers</h3>
        <ScrollCards>
          <div className="card">
          <strong><h4>Question: How does the pricing work?</h4></strong>
          <p>For 30 minutes of a tutoring session, we cost $40. This is the cost for all subjects and all tutors. After choosing a time and filling out the student information form, we will email you back in 1-48 hours with a payment link and location. </p>
          </div>
        </ScrollCards>
        <ScrollCards>
          <div className="card">
          <strong><h4>Question: What do we teach?</h4></strong>
          <p>Currently, we teach science, math, and coding/computer science. These topics go up to the middle school level, and are covered by tutors skilled in these subjects.</p>
          </div>
        </ScrollCards>
        <ScrollCards>
          <div className="card">
          <strong><h4>Question: What makes you different from any other tutoring organization?</h4></strong>
          <p>We value the students, not just getting paid. We also emphasize the importance of understanding the concepts and why they work, not just teaching. As some of the top students in our age group, we've learnt the importance of commitment and comphrension, and we wish to pass that on to our students.</p>
          </div>
        </ScrollCards>
        <ScrollCards>
          <div className="card">
          <strong><h4>Question: How long are the sessions?</h4></strong>
          <p>The sessions will be 30 minutes long and cost $40. We are available on weekdays from 12-5 PM. If you would like, you could book sessions back to back, and our tutors will be happy to teach you.</p>
          </div>
        </ScrollCards>
        <ScrollCards>
          <div className="card">
          <strong><h4>Question: What are you doing, and how will you help?</h4></strong>
          <p>We are a group of students looking to help our community by imparting our knowledge onto budding students. Since this will be only for the summer, we look to teach themes of commitment and understanding instead of just teaching concepts, since we have learnt those skills matter a lot more.</p>
          </div>
        </ScrollCards>
         
        
      </div>
      </ScrollReveal>
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