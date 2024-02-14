function App() {
  return (
    <div>
      <BillInput />
      <PercentageRating>How did you like the service?</PercentageRating>
      <PercentageRating>How did your friend like the service?</PercentageRating>
      <TextOutput />
      <ResetButton />
    </div>
  );
}

function BillInput() {
  return (
    <div className="d-flex">
      <h1>How much was the bill?</h1>
      <input type="text" />
    </div>
  );
}
function PercentageRating({ children }) {
  return (
    <div className="d-flex">
      <h1>{children}</h1>
      <select>
        <option>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function TextOutput() {
  return (
    <div className="d-flex">
      <h1>You pay $105 ($100 + $5 tip)</h1>
    </div>
  );
}
function ResetButton() {
  return <button>Reset</button>;
}

export default App;
