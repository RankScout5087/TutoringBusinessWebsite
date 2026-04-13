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
                <img src={doyoon} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Doyoon</h3>
                    <p className="tutor-role">Math & Science Tutor</p>
                    <p className="tutor-bio">
                    Student at Ereckson Middle School. Participated in TMSCA General Math and Science in competitions such as the Azle High School TMSCA Meet. At the TMSCA state competition, he ranked 34th out of all students in Texas in science. Plays violin and ranked (rank later) at the Chamber Festival competition. Tutors math and science.
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
                    Student at Ereckson Middle School with a strong focus on STEM. Actively competes in math and science through TMSCA events, including meets hosted by Azle High School and the state-level competition, getting 18th in Calculator and 101th in Science. Has experience in Python and data science and contributes coding skills to a BEST Robotics team.
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
                    Student at Ereckson Middle School with strong skills in violin, skating, and STEM. Has taken part in TMSCA science competitions, including the Azle High School meet and the state-level competition. A standout violinist in the Ereckson Middle School Chamber Orchestra and an accomplished ice skater, placing 6th at a Skate Dallas event.
                    </p>
                </div>
            </div>
        </ScrollCards>
        <ScrollCards>
            <div className="tutor-card">
                <img src={Akhil} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Akhil</h3>
                    <p className="tutor-role">(Does not want to show face online)</p>
                    <p className="tutor-role">Math and Computer Science Tutor</p>
                    <p className="tutor-bio">
                    Student at Ereckson Middle School with a drive for creation. Competed in math competitions through TMSCA events, including meets hosted by Azle High School and Cross-Timbers High School. Has experience in Python, JavaScript, React, Game Development, and Data Science, performing (rank later) in a AWAAI Hackathon.
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
                    Student at Ereckson Middle School with a strong creative spark. Achieved notable results in TMSCA competitions, including 85th place in Science and 54th in Calculator at the state level. Also works in graphic design for a travel agency and creates digital edits, showcasing a strong creative and technical skill set.
                    </p>
                </div>
            </div>
        </ScrollCards>
        <ScrollCards>
            <div className="tutor-card">
                <img src={Jeffrey} className="tutor-img" />

                <div className="tutor-info">
                    <h3 className="tutor-name">Jeffrey</h3>
                    <p className="tutor-role">(Does not want to show face online)</p>
                    <p className="tutor-role">Math and Computer Science Tutor</p>
                    <p className="tutor-bio">
                    Student at Ereckson Middle School skilled in math and computer science. Got top scores in math competitions through TMSCA events, including meets hosted by Azle High School and the state competition, getting 31th in Number Sense, 33rd in Calculator, and 45th in General Math. Has experience in Python and JavaScript, creating tools to practice and bolster Number Sense skills and hexagonal tic-tac-toe, performing (rank later) in a AWAAI Hackathon.
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