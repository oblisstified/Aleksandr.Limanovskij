import NavBar from "./components/NavBar";
import Carousel from "react-bootstrap/Carousel";
import background from "./assets/background1.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email.png";
import downArrow from "./assets/downArrow.png";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

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
          <img className="github" src={github} />
        </a>
        <a href="https://www.linkedin.com/in/aleksandr-limanovskij-0283b61a4/">
          <img className="linkedin" src={linkedin} />
        </a>
        <a href="mailto:14alimanovskij@gmail.com">
          <img className="email" src={email} />
        </a>
      </div>
      <img className="downArrow" src={downArrow} />

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ flex: 1, width: "100%", height: "50%" }}
              src={background}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ flex: 1, width: "100%", height: "50%" }}
              src={background}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ flex: 1, width: "100%", height: "50%" }}
              src={background}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
