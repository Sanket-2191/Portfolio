import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About(props) {
  const myProfileDetails = props.details;

  return (
    <section id="about">
      <div className="flex justify-center items-center">
        <div className="profileImg">
          <figure>
            <motion.img
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
              src={myProfileDetails?.profilephoto || ""}
              alt="Profile"
              style={{ borderRadius: "50%", width: "100%", height: "auto" }}
            />
          </figure>
        </div>
        <motion.div
          className="about-text text-blue-400"
          style={{
            padding: "25px",
            maxWidth: "600px",
            textAlign: "center",
          }}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
        >
          <h1>About</h1>
          <br />
          <h2>{myProfileDetails?.about_me.para1 || "saknet"}</h2>
          <h4>{myProfileDetails?.about_me.para2 || "saknet"}</h4>
          <h4>{myProfileDetails?.about_me.para3 || "saknet"}</h4>
          <h4>{myProfileDetails?.about_me.para4 || "saknet"}</h4>
          <h4>{myProfileDetails?.about_me.para5 || "saknet"}</h4>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
