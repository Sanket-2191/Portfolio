import React, { useRef, useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { DETAILS } from "../../data/Details.js";
import About from "../About/About.jsx";
import Certificate from "../Certificate/Certificate.jsx";
import "./Main.css";
import Home from "../Home/Home.jsx";

function Main() {
  const myProfileDetails = DETAILS;
  const [toggleMenu, setToggleMenu] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificateRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const scrollToAbout = () => {
    setToggleMenu(false);
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCertificate = () => {
    setToggleMenu(false);
    certificateRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Add padding to body to offset fixed navbar
  useEffect(() => {
    // document.body.style.paddingTop = "64px"; // height of AppBar
    return () => {
      document.body.style.paddingTop = "0px";
    };
  }, []);

  return (
    <div className="MainContainer">
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={myProfileDetails.logo}
              alt={myProfileDetails.name}
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            {myProfileDetails.name}
          </Typography>
          <Button color="inherit" onClick={scrollToHome}>
            Home
          </Button>
          <Button color="inherit" onClick={scrollToAbout}>
            About
          </Button>
          <Button color="inherit" onClick={scrollToCertificate}>
            Certification
          </Button>
        </Toolbar>
      </AppBar>
      <div ref={homeRef} className="main-pages">
        <Home details={myProfileDetails} />
      </div>
      <div ref={aboutRef}>
        <About details={myProfileDetails} />
      </div>
      <div ref={certificateRef}>
        <Certificate details={myProfileDetails} />
      </div>
    </div>
  );
}

export default Main;
