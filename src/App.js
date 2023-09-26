import { useState } from "react";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "What language is react based on?",
    answer: "Javascript",
  },
  {
    id: 2,
    question: "What are the building blocks of react apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled Elements",
  },
];

function App() {
  return (
    <>
      <h1>❔ React Q/A - Flash Cards 🃏</h1>
      <FlashCards />
    </>
  );
}

function FlashCards() {
  const [currentId, setCurrentId] = useState("");
  function handleClick(id) {
    currentId === id ? setCurrentId(null) : setCurrentId(id);
  }
  return (
    <>
      <ul className="flash-cards">
        {questions.map((card) => {
          return (
            <li
              className={`card ${card.id === currentId ? "selected" : ""} `}
              onClick={() => handleClick(card.id)}
            >
              {card.id === currentId ? card.answer : card.question}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
