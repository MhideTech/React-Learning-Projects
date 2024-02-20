import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("jan 1 2000");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      {/* <div className="row">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div> */}
      <div className="row">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <label>{step}</label>
      </div>
      <div className="row">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <p>Count: {count}</p> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <h2>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </h2>
      <div className="center">
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
