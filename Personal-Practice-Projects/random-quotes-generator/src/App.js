import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    "No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now."
  );
  const [author, setAuthor] = useState("Alan Watts");

  return (
    <div className="app">
      <div className="container">
        <header>Random Quote Generator</header>
        <div className="content">
          <div className="quote-area">
            <i className="fa-solid fa-quote-left"></i>
            <p className="quote">{quote}</p>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <div className="author">
            <span>~</span>
            <span className="name">{author}</span>
          </div>
          <Buttons onSetQuote={setQuote} onSetAuthor={setAuthor} />
        </div>
      </div>
    </div>
  );
}

function Buttons({ onSetQuote, onSetAuthor }) {
  return (
    <div className="buttons">
      <div className="features">
        <ul>
          <li className="sound">
            <i className="fa-solid fa-volume-high"></i>
          </li>
          <li className="copy">
            <i className="fa-solid fa-copy"></i>
          </li>
          <li className="twitter">
            <i className="fa-solid fa-share-nodes"></i>
          </li>
        </ul>
        <NewQuoteButton onSetQuote={onSetQuote} onSetAuthor={onSetAuthor} />
      </div>
    </div>
  );
}

function NewQuoteButton({ onSetQuote, onSetAuthor }) {
  function fetchQuotes() {
    fetch("https://quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        onSetQuote(result.content);
        onSetAuthor(result.author);
      });
  }

  return <button onClick={fetchQuotes}>New Quotes</button>;
}

export default App;
