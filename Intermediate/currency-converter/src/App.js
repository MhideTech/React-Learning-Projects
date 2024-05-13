import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState("OUTPUT");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      try {
        async function convertCurrency() {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`
          );
          const data = await res.json();
          let dynamic = to;
          let { [dynamic]: des } = data.rates;
          setAmount(des);
          setIsLoading(false);
        }

        if (from === to) return setAmount(input);
        convertCurrency();
      } catch (e) {
        console.log(e);
      }
    },
    [input, from, to]
  );

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>
        {input} {from} is equals to {amount} {to}
      </p>
    </div>
  );
}
