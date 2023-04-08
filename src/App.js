import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://dictionary-app-bn.netlify.app/">
            <img src={logo} className="logo" alt="Dictionary App logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          <a
            href="https://github.com/bnardi99/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open-source
          </a>{" "}
          code by Brenda Nardi
        </footer>
      </div>
    </div>
  );
}

export default App;
