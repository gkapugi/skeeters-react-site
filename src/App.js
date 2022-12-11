import logo from './Skeeters_Logo-transformed.png';
import './App.css';
import beerNameList from './Beers.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="List-container">
        <ul className="Beer-list">
          {beerNameList}
        </ul>
      </div>
    </div>
  );
}

export default App;
