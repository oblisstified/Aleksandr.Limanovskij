// App.js
import { useState } from "react";
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
import hexagon from "./assets/hexagon.png";
import gradient from "./assets/gradiant.png";

import { Box } from "@mui/material";

import "./App.css";
import Popup from "./components/popUp";

function scrollDown() {
  const element = document.getElementById("carouselSection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpPosition, setPopUpPosition] = useState("false");
  const [isHovered, setIsHovered] = useState("false");

  const togglePopup = (popUpPosition: string) => {
    setIsOpen(!isOpen);
    setPopUpPosition(popUpPosition);
  };

  const handleMouseEnter = (projectPosition: string) => {
    setIsHovered(projectPosition);
  };

  const handleMouseLeave = () => {
    setIsHovered("");
  };

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
            {" "}
            <div className="white-box">
              <div className="insideBox">
                <div>
                  {isOpen && popUpPosition == "1" && (
                    <Popup
                      content={
                        <>
                          <b>Calorie intake mobile app</b>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed ac odio sit amet sem malesuada accumsan.
                            Proin pharetra, odio ut bibendum ullamcorper, orci
                            dui vehicula urna, ut elementum urna dui a elit. In
                            finibus massa quis mauris semper, ut facilisis nunc
                            tincidunt. Phasellus eu tincidunt libero. Fusce at
                            nisi scelerisque, tristique mi vel, posuere quam.
                            Nulla egestas est eget ipsum dictum, nec tristique
                            sapien venenatis. Quisque at ex scelerisque,
                            fermentum mi ut, varius elit. Pellentesque venenatis
                            eu mi a feugiat. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            curae; Integer nec bibendum nunc. Aenean sagittis
                            suscipit libero, quis volutpat nisi vehicula at.
                            Donec non congue ligula. Nulla eu enim eget nunc
                            hendrerit vehicula eget id eros. Curabitur vel
                            interdum libero. Etiam cursus diam a massa pharetra,
                            eu hendrerit urna efficitur. Nulla facilisi. Fusce
                            auctor viverra lectus a dapibus. Maecenas facilisis
                            quam ac elit blandit, quis aliquam magna ultricies.
                          </p>
                        </>
                      }
                      handleClose={() => togglePopup("1")}
                    />
                  )}
                  <div className="box box-purple">
                    <div>
                      <img
                        className={`diamond changeSize ${
                          isHovered == "1" ? "hovered" : ""
                        }`}
                        src={hexagon}
                        onMouseEnter={() => handleMouseEnter("1")}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => togglePopup("1")}
                      />
                    </div>
                    <text
                      className={`myProjectsName changeSize ${
                        isHovered == "1" ? "hovered" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter("1")}
                      onMouseLeave={() => handleMouseLeave()}
                      onClick={() => togglePopup("1")}
                    >
                      Meal Time
                    </text>
                  </div>
                </div>
                {isOpen && popUpPosition == "2" && (
                  <Popup
                    content={
                      <>
                        <b>Chess AI</b>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ac odio sit amet sem malesuada accumsan.
                          Proin pharetra, odio ut bibendum ullamcorper, orci dui
                          vehicula urna, ut elementum urna dui a elit. In
                          finibus massa quis mauris semper, ut facilisis nunc
                          tincidunt. Phasellus eu tincidunt libero. Fusce at
                          nisi scelerisque, tristique mi vel, posuere quam.
                          Nulla egestas est eget ipsum dictum, nec tristique
                          sapien venenatis. Quisque at ex scelerisque, fermentum
                          mi ut, varius elit. Pellentesque venenatis eu mi a
                          feugiat. Vestibulum ante ipsum primis in faucibus orci
                          luctus et ultrices posuere cubilia curae; Integer nec
                          bibendum nunc. Aenean sagittis suscipit libero, quis
                          volutpat nisi vehicula at. Donec non congue ligula.
                          Nulla eu enim eget nunc hendrerit vehicula eget id
                          eros. Curabitur vel interdum libero. Etiam cursus diam
                          a massa pharetra, eu hendrerit urna efficitur. Nulla
                          facilisi. Fusce auctor viverra lectus a dapibus.
                          Maecenas facilisis quam ac elit blandit, quis aliquam
                          magna ultricies.
                        </p>
                      </>
                    }
                    handleClose={() => togglePopup("2")}
                  />
                )}
                <div className="box box-red">
                  <div>
                    <img
                      className={`diamond changeSize ${
                        isHovered == "2" ? "hovered" : ""
                      }`}
                      src={hexagon}
                      onMouseEnter={() => handleMouseEnter("2")}
                      onMouseLeave={() => handleMouseLeave()}
                      onClick={() => togglePopup("2")}
                    />
                  </div>

                  <text
                    className={`myProjectsName changeSize ${
                      isHovered == "2" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("2")}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => togglePopup("2")}
                  >
                    Chess AI
                  </text>
                </div>
                {isOpen && popUpPosition == "3" && (
                  <Popup
                    content={
                      <>
                        <b>MineSweeper</b>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ac odio sit amet sem malesuada accumsan.
                          Proin pharetra, odio ut bibendum ullamcorper, orci dui
                          vehicula urna, ut elementum urna dui a elit. In
                          finibus massa quis mauris semper, ut facilisis nunc
                          tincidunt. Phasellus eu tincidunt libero. Fusce at
                          nisi scelerisque, tristique mi vel, posuere quam.
                          Nulla egestas est eget ipsum dictum, nec tristique
                          sapien venenatis. Quisque at ex scelerisque, fermentum
                          mi ut, varius elit. Pellentesque venenatis eu mi a
                          feugiat. Vestibulum ante ipsum primis in faucibus orci
                          luctus et ultrices posuere cubilia curae; Integer nec
                          bibendum nunc. Aenean sagittis suscipit libero, quis
                          volutpat nisi vehicula at. Donec non congue ligula.
                          Nulla eu enim eget nunc hendrerit vehicula eget id
                          eros. Curabitur vel interdum libero. Etiam cursus diam
                          a massa pharetra, eu hendrerit urna efficitur. Nulla
                          facilisi. Fusce auctor viverra lectus a dapibus.
                          Maecenas facilisis quam ac elit blandit, quis aliquam
                          magna ultricies.
                        </p>
                      </>
                    }
                    handleClose={() => togglePopup("3")}
                  />
                )}
                <div className="box box-blue">
                  <div>
                    <img
                      className={`diamond changeSize ${
                        isHovered == "3" ? "hovered" : ""
                      }`}
                      src={hexagon}
                      onMouseEnter={() => handleMouseEnter("3")}
                      onMouseLeave={() => handleMouseLeave()}
                      onClick={() => togglePopup("3")}
                    />
                  </div>
                  <text
                    className={`myProjectsName changeSize ${
                      isHovered == "3" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("3")}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => togglePopup("3")}
                  >
                    Mines
                  </text>
                </div>

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
