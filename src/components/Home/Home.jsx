import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home(props) {
  const myProfileDetails = props.details;

  const openResumeURL = () => {
    window.open(myProfileDetails.resumeLink, "_blank");
  };

  return (
    <motion.section
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div
        className="container text-center jumbotron"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.h2
          className="text-color-main"
          animate={{ fontWeight: 700 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          Hello, I am{" "}
          <span className="text-color-main-name">{myProfileDetails.name}</span>
          <br />
          <Typewriter
            words={myProfileDetails.role}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>
        <br />
        <br />
        <p>
          <motion.span
            animate={{ scale: 1.15 }}
            transition={{ delay: 1.4, duration: 1 }}
            onClick={() => openResumeURL()}
            className="resumebtn resumebtn-specs"
          >
            Get Resume{" "}
            <motion.span>
              <i className="fa fa-download"></i>
            </motion.span>
          </motion.span>
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Home;
