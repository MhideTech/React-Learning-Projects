import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(5);
  const date = new Date('may 13 2024');
  date.setDate(date.getDate() + count);
  
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{date.toDateString()}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
