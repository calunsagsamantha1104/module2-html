import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card skills">
      <div className="skills-toggle">
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Hide Skills" : "Show Skills"}
        </button>
      </div>

      {visible && (
        <div className="skills-content">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;