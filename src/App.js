import { useState } from "react";

const faqs = [
  {
    title: "What should you be thankful for?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sint totam repellendus nemo nostrum reiciendis eligendi, eos temporibus impedit rem.",
  },
  {
    title: "Why should we love our dogs?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto voluptates adipisci esse accusamus. Corporis pariatur iure exercitationem tenetur vitae repellendus amet earum nam velit!",
  },
  {
    title: "What can we do in order to achieve our goals?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus voluptate deserunt rem, quibusdam doloremque.",
  },
];

export default function App() {
  return (
    <>
      <Accordion />
    </>
  );
}

function Accordion() {
  return (
    <ul className="accordion">
      {faqs.map((element, index) => {
        return <AccordionItem key={index} accordionData={{ element, index }} />;
      })}
    </ul>
  );
}

function AccordionItem({ accordionData: { element, index } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="accordion-item"
      style={
        isOpen
          ? {
              borderTop: "5px solid cyan",
              borderRadius: "5px 5px 0px 0px",
              boxShadow: "0px 10px 10px 5px hsla(0, 0%, 50%, 0.1)",
            }
          : { border: "none" }
      }
    >
      <div onClick={() => setIsOpen(!isOpen)} className="title-container">
        <span
          className="title"
          style={isOpen ? { color: "rgb(0, 174, 174)" } : { color: "#333" }}
        >
          0{index + 1} {element.title}
        </span>{" "}
        <span>{!isOpen ? "➕" : "➖"}</span>
      </div>
      <div
        style={isOpen ? { display: "block" } : { display: "none" }}
        className="text-container"
      >
        <span className="text">{element.text}</span>
      </div>
    </li>
  );
}
