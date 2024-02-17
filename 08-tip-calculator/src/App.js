import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [rating, setRating] = useState(0);
  const [frndRating, setFrndRating] = useState(0);

  const tip = (rating / 100) * bill;
  const frndTip = (frndRating / 100) * bill;
  const totalTip = (tip + frndTip) / 2;
  const totalBill = bill + totalTip;

  function resetValues() {
    setBill("");
    setRating(0);
    setFrndRating(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <PercentageRating rating={rating} onSetRating={setRating}>
        How did you like the service?
      </PercentageRating>

      <PercentageRating rating={frndRating} onSetRating={setFrndRating}>
        How did your friend like the service?
      </PercentageRating>

      <TextOutput bill={bill} totalTip={totalTip} totalBill={totalBill} />

      <ResetButton reset={resetValues} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="d-flex">
      <h1>How much was the bill?</h1>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(() => +e.target.value)}
      />
    </div>
  );
}
function PercentageRating({ children, rating, onSetRating }) {
  return (
    <div className="d-flex">
      <h1>{children}</h1>
      <select
        value={rating}
        onChange={(e) => onSetRating(() => e.target.value)}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
      x
    </div>
  );
}

function TextOutput({ bill, totalTip, totalBill }) {
  return (
    <div className="d-flex">
      <h1>
        You pay ${totalBill} (${bill} + ${totalTip} tip)
      </h1>
    </div>
  );
}

function ResetButton({ reset }) {
  return <button onClick={reset}>Reset</button>;
}

export default App;
