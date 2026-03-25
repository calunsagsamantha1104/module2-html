import { useState } from "react";
import AboutMe from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const educationData = [
    { program: "College", school: "USTP-CDO", year: "2028" },
    { program: "Senior High School", school: "Liceo De Cagayan University", year: "2023" },
    { program: "Junior High School", school: "MOGCHS  ", year: "2020" },
    { program: "Elementary", school: "City Central ELementary School", year: "2016" },
  ];

  const skillsData = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <div className="wrapper">

        <button className="toggle-btn" onClick={toggleDarkMode}>
          Light/Dark Mode
        </button>

        <div className="container">
          <Header />
          <AboutMe />
          <Education education={educationData} />
          <Skills skills={skillsData} />
          <Contact />

          <footer>
        <p>Samantha S. Calunsag . All rights reserved © 2026</p>
      </footer>

        </div>

      </div>

    </div>
  );
}

export default App;