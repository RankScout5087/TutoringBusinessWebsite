import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "motion/react"
import PageLinks from "./PageLinks"
import ScrollReveal from "./ScrollReveal";
import ScrollCards from "./ScrollCards";
import doyoon from "./assets/Doyoon.jpg"
import Akhil from "./assets/Akhil.jpg"
import Lyric from "./assets/Lyric.jpg"
import Zoe from "./assets/Zoe.jpg"
import Ishaan from "./assets/Ishaan.png"
import Jeffrey from "./assets/Jeffrey.jpg"
function Tutors() {
  const MotionLink = motion.create(Link)
  return (
    <div className="page">
      <PageLinks/>
      

      <section className="hero small-hero ">
        <motion.h2 className="emphasis"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>Our Tutors
</motion.h2>
        <p>All our people and what they specialize in. Images in progress</p>
      </section>


      <div className="tutor-backplate">
        <h3 className="tutor-title">Our Tutors</h3>
        <ScrollCards>
            <div className="tutor-card">
                <img src={Akhil} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Akhil</h3>
                    <p className="tutor-role">(Does not want to show face online)</p>
                    <p className="tutor-role">Math and Computer Science Tutor</p>
                    <p className="tutor-bio">
                    Hey, I'm a student at Ereckson Middle School with a drive for creation. I have competed in math competitions through TMSCA events, including meets hosted by Azle High School and Cross-Timbers High School. I enjoy coding in Python, JavaScript, and React, and I have experience in Game Development, and Data Science. I performed (rank later) in a AWAAI Hackathon and I created this website!
                    </p>
                </div>
            </div>
        </ScrollCards>
        <ScrollCards>
            <div className="tutor-card">
                <img src={Zoe} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Zoe</h3>
                    <p className="tutor-role">(Does not want to show face online)</p>
                    <p className="tutor-role">Science Tutor</p>
                    <p className="tutor-bio">
                    Hello, I'm a student at Ereckson Middle School with skills in math, English and music. I'm an accomplished Violin player who recently placed first in region 25 2025-2026 and was Concermaster of both the Brahms Region Orchestra and the Chamber Orchestra of Ereckson. I qualified and attended state with the TMSCA team and has a variety of skills with computers, specifically in design, adobe apps, CapCut, etc.
                    </p>
                </div>
            </div>
        </ScrollCards>
        <ScrollCards>
            <div className="tutor-card">
                <img src={doyoon} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Doyoon</h3>
                    <p className="tutor-role">Math & Science Tutor</p>
                    <p className="tutor-bio">
                    Hello. I'm a student at Ereckson Middle School. I participated in TMSCA General Math and Science in competitions such as the Azle High School TMSCA Meet. At the TMSCA state competition, I ranked 34th out of all students in Texas in science. I play violin and ranked (rank later) at the Chamber Festival competition. I tutor math and science.
                    </p>
                </div>
            </div>
        </ScrollCards>
        
        
        
        <ScrollCards>
            <div className="tutor-card">
                <img src={Lyric} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Lyric</h3>
                    <p className="tutor-role">(Does not want to show face online)</p>
                    <p className="tutor-role">Math and Science Tutor</p>
                    <p className="tutor-bio">
                    Hello! My name’s Lyric, and I’m available to tutor math and/or science. I participated in TMSCA for both calculator and science, competing in state with a team that placed 6th overall out of over 100 schools total. I’m a straight A’s student, participating in NJHS and having done high-school courses online. I’m also proficient in Excel, PowerPoint and other applications, with a job in graphic design and editing. English is my main language, but I’m currently learning and can speak basic Spanish and Japanese.
                    </p>
                </div>
            </div>
        </ScrollCards>
        <ScrollCards>
            <div className="tutor-card">
                <img src={Ishaan} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Ishaan</h3>
                    <p className="tutor-role">Math, Science, and Computer Science Tutor</p>
                    <p className="tutor-bio">
                    Hey, I'm a student at Ereckson Middle School with a strong focus on STEM. I'm involved in religious community through BSA and Plano PREC STUCO. Member of NJHS, Turing Club, Texas Math and Science Coaches Association (TMSCA - Calculator, Science, and General Math divisions). I've competed in State level competitions for 2 years and placed 18th in calculator in the state of Texas as an 8th grader. Some previous clubs I was in include Creative Writing Club, Art Club, and Debate Club. I have experience in Python and data science and contributed coding skills to a BEST Robotics team. I'm fluent in English and possesses basic understanding of Spanish.
                    </p>
                </div>
            </div>
        </ScrollCards>
      </div>

      <section className="cta">
        <h2>Book A Session with our Top-Notch Tutors</h2>
        <p>We’ll be sure to teach you.</p>

        <MotionLink whileHover={{ scale: 1.1 , transition: { duration: 0.1 }}}to="/form" className="btn-primary">
          Book a Session
        </MotionLink>
      </section>

      <footer className="footer">© 2026 Allen Tutoring</footer>
    </div>
  );
}

export default Tutors;