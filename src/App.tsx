// App.js
import { useState } from "react";

import NavBar from "./components/NavBar";

import background from "./assets/background.jpg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email.png";
import downArrow from "./assets/downArrow.png";

import resume from "./assets/resume.pdf";
import projects, { Project } from "./text/ProjectInfo";
import "./App.css";
import Popup from "./components/popUp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpPosition, setPopUpPosition] = useState("false");

  function renderProjects(project: Project) {
    return (
      <div key={project.id} style={{ margin: "1px" }}>
        {isOpen && popUpPosition === project.id && (
          <Popup
            content={
              <>
                <b className="centre">{project.title}</b>
                <p
                  style={{
                    marginLeft: "15%",
                    marginRight: "15%",
                    marginTop: "3%",
                    marginBottom: "3%",
                  }}
                >
                  {project.description}
                </p>
              </>
            }
            handleClose={() => togglePopup(project.id)}
            video={project.video}
            dependencies={project.dependencies}
            time={project.time}
          />
        )}
        <div className="projectContainer">
          <div className="project-list">
            <div className="project-section">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt="Project"
                  className="project-image"
                />
              </div>
              <div className="project-details">
                <h2 className="project-title">
                  {project.title} {/*{"-".repeat(68 - project.title.length)} */}
                </h2>
                <button
                  className="project-button"
                  onClick={() => togglePopup(project.id)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function togglePopup(popUpPosition: string) {
    setIsOpen(!isOpen);
    setPopUpPosition(popUpPosition);
  }

  function scrollDown() {
    const element = document.getElementById("carouselSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="background">
      {/* <div>
        <NavBar />
      </div> */}

      <div>
        <img
          style={{ flex: 1, width: "100%", height: "940px" }}
          src={background}
          alt="background"
        />
        <h1 className="header">Aleksandr Limanovskij</h1>
      </div>
      <div className="websites">
        <a href="https://github.com/Oblisstified" target="_blank">
          <img className="github" src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/aleksandr-limanovskij-0283b61a4/"
          target="_blank"
        >
          <img className="linkedin" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:14alimanovskij@gmail.com">
          <img className="email" src={email} alt="Email" />
        </a>
      </div>
      <img
        className="downArrow centre"
        src={downArrow}
        alt="Down Arrow"
        onClick={scrollDown}
      />
      <div className="myProjectsHeader centre">
        <h1>Get to know me</h1>
      </div>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hello, I'm Aleksandr Limanovskij, a dedicated developer and
              creative problem solver based in London. With a solid foundation
              in programming, I am committed to crafting efficient and refined
              solutions.
            </p>
            <p>
              I am currently in my third year of my Bachelors degree at King's
              College London and currently interested in AI/development job
              opportunities. I am open to new software projects/startups so if
              you believe that I am a good fit, then send me an email.
            </p>
            <p>
              I am currently in my third year of my Bachelors degree at King's
              College London and currently interested in AI/development job
              opportunities. I am open to new software projects/startups so if
              you believe that I am a good fit, then send me an email. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
              purus a diam egestas, nec congue est sollicitudin. Donec malesuada
              urna eu vestibulum. Nulla auctor, risus ac vulputate convallis,
              ligula urna fringilla ipsum, et hendrerit nisl justo vel ex.
              Vestibulum vel libero vel justo dapibus tincidunt. Fusce eu felis
              elit. Nulla facilisi. Cras aliquet ante ut urna fringilla
              volutpat. SuspendisseLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed accumsan purus a diam egestas, nec congue est
              sollicitudin. Donec malesuada urna eu vestibulum. Nulla auctor,
              risus ac vulputate convallis, ligula urna fringilla ipsum, et
              hendrerit nisl justo vel ex. Vestibulum vel libero vel justo
              dapibus tincidunt. Fusce eu felis elit. Nulla facilisi. Cras
              aliquet ante ut urna fringilla volutpat. SuspendisseLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed accumsan purus a
              diam egestas, nec congue est sollicitudin. Donec malesuada urna eu
              vestibulum. Nulla auctor, risus ac vulputate convallis, ligula
              urna fringilla ipsum, et hendrerit nisl justo vel ex. Vestibulum
              vel libero vel justo dapibus tincidunt. Fusce eu felis elit. Nulla
              facilisi. Cras aliquet ante ut urna fringilla volutpat.
              SuspendisseLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed accumsan purus a diam egestas, nec congue est
              sollicitudin. Donec malesuada urna eu vestibulum. Nulla auctor,
              risus ac vulputate convallis, ligula urna fringilla ipsum, et
              hendrerit nisl justo vel ex. Vestibulum vel libero vel justo
              dapibus tincidunt. Fusce eu felis elit. Nulla facilisi. Cras
              aliquet ante ut urna fringilla volutpat. SuspendisseLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed accumsan purus a
              diam egestas, nec congue est sollicitudin. Donec malesuada urna eu
              vestibulum. Nulla auctor, risus ac vulputate convallis, ligula
              urna fringilla ipsum, et hendrerit nisl justo vel ex. Vestibulum
              vel libero vel justo dapibus tincidunt. Fusce eu felis elit. Nulla
              facilisi. Cras aliquet ante ut urna fringilla volutpat.
              Suspendisse
            </p>
            <a href={resume} target="_blank" className="CVButton">
              View CV
            </a>
            <br></br>
          </div>
        </div>
      </section>
      {/* <Document file={resume}>
        <Page pageNumber={1} />
      </Document> */}

      <div className="myProjectsHeader">
        <h1>My Projects</h1>
      </div>
      <div className="projectContainer">
        <div className="projects-section">
          <div className="project-list">
            {projects.map((project) => renderProjects(project))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
