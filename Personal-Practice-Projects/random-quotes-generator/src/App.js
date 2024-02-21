function App() {
  return (
    <div className="app">
      <div className="container">
        <header>Random Quote Generator</header>
        <div className="content">
          <div className="quote-area">
            <i class="fa-solid fa-quote-left"></i>
            <p className="quote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              nobis repellat aut quod iusto vero minus et praesentium ipsam
              nostrum.
            </p>
            <i class="fa-solid fa-quote-right"></i>
          </div>
          <div className="author">
            <span>~</span>
            <span className="name">Mhizta Orlah</span>
          </div>
          <div className="buttons">
            <div className="features">
              <ul>
                <li className="sound">
                  <i class="fa-solid fa-volume-high"></i>
                </li>
                <li className="copy">
                  <i class="fa-solid fa-copy"></i>
                </li>
                <li className="twitter">
                  <i class="fa-solid fa-share-nodes"></i>
                </li>
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
