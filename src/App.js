import logo from './Skeeters_Logo-transformed.png';
import { useState } from 'react';
import './App.css';
import { beers } from './Beers.js';

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  return (
    <div className="wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="accordian">
        {beers.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => toggle(index)}>
              <h2>Tap {item.tapID}: {item.name}- {item.style}</h2>
              <span>{selected === index ? '-' : '+'}</span>
            </div>
            <div className={selected === index ? "content show" : "content"}>
              ABV: {item.abv}<br></br>
              IBU: {item.ibu}<br></br>
              SRM: {item.srm}<br></br>
              Gravity: {item.gravity}<br></br>
              Packaged On: {item.packaged}<br></br>
              Brewed By: {item.brewedBy}<br></br>
              Description: {item.description}<br></br>
              About: {item.about}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
