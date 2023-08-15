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

import projects, { Project } from "./text/ProjectInfo";
import "./App.css";
import Popup from "./components/popUp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpPosition, setPopUpPosition] = useState("false");
  const [isHovered, setIsHovered] = useState("false");

  function renderProjects(project: Project) {
    return (
      <div key={project.id} style={{ margin: "1px" }}>
        {isOpen && popUpPosition === project.id && (
          <Popup
            content={
              <>
                <b>{project.title}</b>
                <p>{project.description}</p>
              </>
            }
            handleClose={() => togglePopup(project.id)}
            video={project.video}
            dependencies={project.dependencies}
            time={project.time}
          />
        )}
        <div className={`box ${project.colorClass}`}>
          <div>
            <img
              className={`diamond changeSize ${
                isHovered === project.id ? "hovered" : ""
              }`}
              src={hexagon}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => togglePopup(project.id)}
            />
          </div>
          <text
            className={`myProjectsName changeSize ${
              isHovered === project.id ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => togglePopup(project.id)}
          >
            {project.title}
          </text>
        </div>
      </div>
    );
  }

  function togglePopup(popUpPosition: string) {
    setIsOpen(!isOpen);
    setPopUpPosition(popUpPosition);
  }

  function handleMouseEnter(projectPosition: string) {
    setIsHovered(projectPosition);
  }

  function handleMouseLeave() {
    setIsHovered("");
  }

  function scrollDown() {
    const element = document.getElementById("carouselSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

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
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hello, I'm{" "}
              <span className="highlight">Aleksandr Limanovskij</span>, a{" "}
              <span className="highlight">dedicated developer</span> and{" "}
              <span className="highlight">creative problem solver</span> based
              in <span className="highlight">[Your Location]</span>. With a
              solid foundation in{" "}
              <span className="highlight">[Your Skills]</span>, I am committed
              to crafting <span className="highlight">efficient</span> and{" "}
              <span className="highlight">refined solutions</span> that{" "}
              <span className="highlight">
                [Your Goal or Value Proposition]
              </span>
              .
            </p>
            <p>
              My journey into programming began{" "}
              <span className="highlight">[Your Starting Point]</span>, and ever
              since, I've embarked on a{" "}
              <span className="highlight">continuous learning expedition</span>{" "}
              to stay at the forefront of the latest{" "}
              <span className="highlight">technologies</span> and{" "}
              <span className="highlight">practices</span> in{" "}
              <span className="highlight">[Your Field or Industry]</span>.
            </p>
            <p>
              Beyond coding, you can find me{" "}
              <span className="highlight">[Your Hobbies or Interests]</span>,
              and I'm consistently{" "}
              <span className="highlight">invigorated by</span> [Your Vision or
              Future Goals]. I strongly believe in the power of{" "}
              <span className="highlight">collaborative efforts</span> and{" "}
              <span className="highlight">transparent communication</span> to
              foster <span className="highlight">innovation</span> and transform{" "}
              <span className="highlight">ideas into reality</span>.
            </p>
            <a href="#contact" className="cta-button">
              Let's Connect
            </a>
          </div>
          <div className="about-image">
            <img src="your-profile-image.jpg" alt="Aleksandr Limanovskij" />
          </div>
        </div>
      </section>

      <div className="myProjectsHeader">
        <h1>My Projects</h1>
      </div>
      <div>
        <Carousel fade interval={null} id="carouselSection">
          <Carousel.Item>
            <div className="white-box">
              <div className="insideBox">
                <div className="centeringEverything">
                  {projects
                    .slice(0, 3)
                    .map((project) => renderProjects(project))}
                </div>
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
                <div className="centeringEverything">
                  {projects
                    .slice(3, 6)
                    .map((project) => renderProjects(project))}
                </div>
              </div>

              <Carousel.Caption>
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
