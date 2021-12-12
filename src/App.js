import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <Dictionary />
      <br />
      Coded by{" "}
      <a href="https://github.com/eloveday/dictionary-app">Emily Loveday</a>
    </div>
  );
}
