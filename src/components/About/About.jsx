import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function About(props) {
  const myProfileDetails = props.details;


  return (
    <section id="about">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="w-[30vw] h-[25vh]" >
            <figure className="">
              <motion.img
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={myProfileDetails?.profilephoto || ""}
                alt="Profile"
                style={{ borderRadius: "50%" }}
              />
            </figure>
          </div>
          <motion.div
            className="text-blue-400"
            style={{
              padding: "25px",
            }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
          >
            <h1>About</h1>
            <br />
            <h5>{myProfileDetails?.about_me.para1 || "saknet"}</h5>
            <p>{myProfileDetails?.about_me.para2 || "saknet"}</p>
            <p>{myProfileDetails?.about_me.para3 || "saknet"}</p>
            <p>{myProfileDetails?.about_me.para4 || "saknet"}</p>
            <p>{myProfileDetails?.about_me.para5 || "saknet"}</p>
          </motion.div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <div
          className="flex  flex-wrap justify-around"
          style={{
            marginTop: "40px",
          }}
        >
          <motion.div
            className=""
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "26px" }}>

                  </b>
                  <br />

                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
}

export default About;
