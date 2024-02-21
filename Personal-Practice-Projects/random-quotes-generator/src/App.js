function App() {
  return (
    <div className="app">
      <div className="container">
        <header>Random Quote Generator</header>
        <div className="content">
          <div className="quote-area">
            <i>"</i>
            <p className="quote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              nobis repellat aut quod iusto vero minus et praesentium ipsam
              nostrum.
            </p>
            <i>"</i>
          </div>
          <div className="author">
            <span>--</span>
            <span className="name">Mhizta Orlah</span>
          </div>
          <div className="buttons">
            <div className="features">
              <ul>
                <li className="sound">🔊</li>
                <li className="copy">©</li>
                <li className="twitter">☘</li>
              </ul>
              <button>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
