import "./App.css";
import Simpson from "./Simpson";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Quotes</h2>

      <Simpson />
    </div>
  );
}

export default App;
