import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./profile.css";

const skillsList = [
  {
    skill: "HTML",
    level: "intermediate",
    color: "#E34F26",
  },
  {
    skill: "CSS",
    level: "expert",
    color: "#1572B6",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#F7DF1E",
  },
  {
    skill: "SASS",
    level: "intermediate",
    color: "#CC6699",
  },
  {
    skill: "NodeJs",
    level: "beginner",
    color: "#339933",
  },
  {
    skill: "MongoDB",
    level: "beginner",
    color: "#47A248",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#61DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div className="img-container">
      <img src="./me.jpg" alt="New Graduate" />
    </div>
  );
}
function Intro() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="intro">
      <h1>Mark Angel Papio</h1>
      <h2>Frontend Developer</h2>
      <span>{currentTime}</span>
      <hr />
      <p>
        "A recent Bachelor of Science graduate with a deep passion for web
        development. I'm dedicated to creating dynamic and user-friendly
        websites that blend my scientific background with cutting-edge
        technology."
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skillsList.map((skill) => {
        return <Skill skill={skill} />;
      })}
    </div>
  );
}
function Skill({ skill: { skill, level, color } }) {
  return (
    <span className="skill" style={{ backgroundColor: color }}>
      {skill}{" "}
      {level === "beginner" ? "👶" : level === "intermediate" ? "🛠️" : "🏆"}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
