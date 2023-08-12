// App.js
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "./components/NavBar";

import background from "./assets/background1.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email.png";
import downArrow from "./assets/downArrow.png";
import hexagon from "./assets/hexagon.png";

import mealTimeVideo from "./assets/MealtimeVideo.mp4";
import minesweeperVideo from "./assets/MineSweeperVideo.mp4";
import chessVideo from "./assets/ChessVideo.mp4";
import NNAdditionVideo from "./assets/NNVideo.mp4";

import MealTimeInfo from "./text/ProjectInfo/MealTime.json";
import ChessAIInfo from "./text/ProjectInfo/ChessAI.json";
import MineSweeperInfo from "./text/ProjectInfo/MineSweeper.json";
import NNAddition from "./text/ProjectInfo/NNAddition.json";

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
                          <b>{MealTimeInfo.title}</b>
                          <p>{MealTimeInfo.description}</p>
                        </>
                      }
                      handleClose={() => togglePopup("1")}
                      video={mealTimeVideo}
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
                        <b>{ChessAIInfo.title}</b>
                        <p>{ChessAIInfo.description}</p>
                      </>
                    }
                    handleClose={() => togglePopup("2")}
                    video={chessVideo}
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
                        <b>{MineSweeperInfo.title}</b>
                        <p>{MineSweeperInfo.description}</p>
                      </>
                    }
                    handleClose={() => togglePopup("3")}
                    video={minesweeperVideo}
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
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="white-box">
              <div className="insideBox">
                <div>
                  {isOpen && popUpPosition == "4" && (
                    <Popup
                      content={
                        <>
                          <b>{NNAddition.title}</b>
                          <p>{NNAddition.description}</p>
                        </>
                      }
                      handleClose={() => togglePopup("4")}
                      video={NNAdditionVideo}
                    />
                  )}
                  <div className="box box-green">
                    <div>
                      <img
                        className={`diamond changeSize ${
                          isHovered == "4" ? "hovered" : ""
                        }`}
                        src={hexagon}
                        onMouseEnter={() => handleMouseEnter("4")}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => togglePopup("4")}
                      />
                    </div>
                    <text
                      className={`myProjectsName changeSize ${
                        isHovered == "4" ? "hovered" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter("4")}
                      onMouseLeave={() => handleMouseLeave()}
                      onClick={() => togglePopup("4")}
                    >
                      Addition
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
