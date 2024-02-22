import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    "No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now."
  );
  const [author, setAuthor] = useState("Alan Watts");

  return (
    <div className="app">
      <h1 className="quote-icon">
        <i className="fa-solid fa-quote-left"></i>
      </h1>
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
          <Buttons
            curQuote={quote}
            curAuthor={author}
            onSetQuote={setQuote}
            onSetAuthor={setAuthor}
          />
        </div>
      </div>
    </div>
  );
}

function Buttons({ curQuote, curAuthor, onSetQuote, onSetAuthor }) {
  function playQuote() {
    let utterance = new SpeechSynthesisUtterance(`${curQuote} by ${curAuthor}`);
    speechSynthesis.speak(utterance);
  }

  function copyQuote() {
    navigator.clipboard.writeText(curQuote);
  }

  function shareQuote() {
    const data = { text: curQuote };
    navigator.share(data);
  }

  return (
    <div className="buttons">
      <div className="features">
        <ul>
          <li onClick={playQuote}>
            <i className="fa-solid fa-volume-high"></i>
          </li>
          <li onClick={copyQuote}>
            <i className="fa-solid fa-copy"></i>
          </li>
          <li onClick={shareQuote}>
            <i className="fa-solid fa-share-nodes"></i>
          </li>
        </ul>
        <NewQuoteButton onSetQuote={onSetQuote} onSetAuthor={onSetAuthor} />
      </div>
    </div>
  );
}

function NewQuoteButton({ onSetQuote, onSetAuthor }) {
  const [isGenerating, setIsGenerating] = useState(false);
  function fetchQuotes() {
    setIsGenerating(true);
    fetch("https://quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        onSetQuote(result.content);
        onSetAuthor(result.author);
        setIsGenerating(false);
      });
  }

  return (
    <button className={isGenerating ? "loading" : ""} onClick={fetchQuotes}>
      {isGenerating ? "Generating..." : "New Quotes"}
    </button>
  );
}

export default App;
