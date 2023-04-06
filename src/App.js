import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo img-fluid"
          alt="Dictionary App logo"
        />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/bnardi99/react-dictionary"
            target="_blank"
          >
            {" "}
            Open-source
          </a>{" "}
          code by Brenda Nardi
        </small>
      </footer>
    </div>
  );
}

export default App;
