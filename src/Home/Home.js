import React from "react";
import profileImage from "../assets/profileImage.jpeg";
import "./home.css";
import resume from "../assets/resume.pdf";
import ghLogo from "../assets/ghLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Home(props) {
  function openResume() {
    window.open(resume);
  }

  return (
    <>
      <div className="home-content-row">
        <img src={profileImage} className="profile-image" alt="Profile"></img>
        <div className="content-column">
          <div className="home-title">
            <Typewriter
              options={{
                strings: ["Hi, I'm Dan!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p>
            I'm a <span className="magic">Software Engineer</span> based in
            Shropshire, UK. 
          </p>
          <div className="home-buttons">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="resume-button"
              onClick={() => openResume()}
            >
              RESUME
            </motion.button>
            <div className="logos">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                alt="GitHub logo"
                src={ghLogo}
                className="ghlogo"
                onClick={() =>
                  window.open(
                    "https://github.com/Dan-Sutton",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              ></motion.img>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                alt="LinkedIn Logo"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dewa-sutton/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                src={linkedinLogo}
                className="linkedinlogo"
              ></motion.img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;