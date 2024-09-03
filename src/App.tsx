// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./components/ProjectInfo"; // Import Projects component
import Experience from "./components/TeamMembers"; // Import Experience component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/cartoonPanel.png";
import picOne from "./assets/TeamPic.png";
import picTwo from "./assets/Jack.png";
import picThree from "./assets/NathanCutting.png";
import picFour from "./assets/FancyNathan.png";
import picFive from "./assets/Georgina.png";
import picSix from "./assets/JackGrad.png";
import picSeven from "./assets/MitchFace.png";
import picEight from "./assets/nevadaSolar.jpg";
import kennyHeadshot from "./assets/kennyHeadshot.jpeg";
import sophieHeadshot from "./assets/sophiePic.png";
import haydenPic from "./assets/Hayden.jpg";
import Cards from "./components/TeamMembers";

import wiringURL from "./assets/wiring.png";
import jackCAD from "./assets/jackCAD.png";
import kennyCode from "./assets/kennyCode.png";
import wire1 from "./assets/wire1.png";

function App() {
  let items = ["Project Info", "Team Members"];
  return (
    <Router>
      <div>
        <Navbar
          brandName="Sol'y Clean Solar"
          imageSrcPath={imagePath}
          navItems={items}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project-info" element={<Projects />} />
          <Route
            path="/team-members"
            element={
              <Cards
                mitchURL={picSeven}
                georgiaURL={picFive}
                jackURL={picSix}
                nathanURL={picFour}
                kennyURL={kennyHeadshot}
                sophieURL={sophieHeadshot}
                haydenURL={haydenPic}
                jackCAD={jackCAD}
                kennyCode={kennyCode}
                wire1={wire1}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
