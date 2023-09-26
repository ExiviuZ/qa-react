import { useState, useEffect } from "react";

export default function App() {
  return (
    <>
      <h1>Date Counter 📅</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  return (
    <>
      <Step stepObj={{ step, setStep }} />
      <Count stepObj={{ step, setStep }} />
    </>
  );
}

function Step({ stepObj: { setStep, step } }) {
  return (
    <div>
      <input
        max={10}
        min={1}
        value={0}
        type="range"
        onChange={(e) => setStep(e.target.value)}
      />
      <span className="range-text" style={{ fontWeight: 500 }}>
        {step}
      </span>
    </div>
  );
}

function Count({ stepObj: { step, setStep } }) {
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date.toDateString());
  function addCount() {
    setCount(count + Number(step));
  }
  function reduceCount() {
    setCount(count - Number(step));
  }
  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <>
      <div>
        <button onClick={reduceCount}>🔻</button>
        <input
          value={count}
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={addCount}>🔺</button>
      </div>
      <p className="date">
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count === 1
          ? `${count} day from today is ${date.toDateString()}`
          : count === -1
          ? `${Math.abs(count)} day ago was ${date.toDateString()}`
          : count > 1
          ? `${count} days from now is ${date.toDateString()}`
          : count < 1
          ? `${Math.abs(count)} days ago was ${date.toDateString()}`
          : ""}
      </p>
      {count !== 0 ? (
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}
