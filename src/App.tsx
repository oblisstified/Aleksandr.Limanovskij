// App.js
import { useRef } from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "./components/NavBar";
import background from "./assets/background1.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email.png";
import downArrow from "./assets/downArrow.png";
import backgroundBox from "./assets/boxBackgound.png";
import appetizerHome from "./assets/appetizeHomeScreen.png";
import minesweeper from "./assets/minesweeperPosition3.png";

import { Box } from "@mui/material";

import "./App.css";

function scrollDown() {
  const element = document.getElementById("carouselSection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  return (
    <div>
      {/* <div>
        <NavBar />
      </div> */}

      <div>
        <img
          style={{ flex: 1, width: "100%", height: "50%" }}
          src={background}
          alt="background"
        />
        <h1 className="header">Aleksandr Limanovskij</h1>
      </div>
      <div className="websites">
        <a href="https://github.com/Oblisstified">
          <img className="github" src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/aleksandr-limanovskij-0283b61a4/">
          <img className="linkedin" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:14alimanovskij@gmail.com">
          <img className="email" src={email} alt="Email" />
        </a>
      </div>
      <img
        className="downArrow"
        src={downArrow}
        alt="Down Arrow"
        onClick={scrollDown}
      />
      <div className="myProjectsHeader">
        <h1>My Projects</h1>
      </div>
      <div>
        <Carousel id="carouselSection">
          <Carousel.Item>
            <div className="white-box">
              <div className="insideBox">
                <div className="box">
                  <div></div>
                  <text className="myProjectsName">Meal time asdas das d</text>
                </div>
                <div className="box">
                  <div></div>
                </div>{" "}
                <div className="box">
                  <div></div>
                </div>{" "}
                {/* <Box className = "hex"> </Box> */}
              </div>

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
