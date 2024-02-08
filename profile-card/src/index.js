import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
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
  return <img src="avatar.jpg" alt="avatar" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Mhizta Orlah</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        voluptates aliquid reiciendis asperiores excepturi, sit laborum dolores
        tenetur nesciunt iste enim nisi dolore doloribus veritatis debitis
        architecto provident voluptate recusandae!
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill-list">
      <Skill text="React" emoji="💪" color="green" />
      <Skill text="HTML+CSS" emoji="😎" color="orange" />
      <Skill text="C" emoji="🤪" color="gold" />
      <Skill text="JavaScript" emoji="😋" color="yellow" />
      <Skill text="Java" emoji="😫" color="red" />
    </ul>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.text}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);