import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          DICTIONARY
        </p>
        <h2>
          What word are you looking for?
        </h2>
      </header>
      <Dictionary />
      <footer>
        Coded by Leire Valencia 🌙
      </footer>
    </div>
  );
}

export default App;
