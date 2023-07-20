import NavBar from "./components/NavBar";
import background from "./assets/background2.png";
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
        <h1>blablablbdalblbsald blasb dlab ldb albsd lasbl dba</h1>
      </div>
    </div>
  );
}

export default App;
