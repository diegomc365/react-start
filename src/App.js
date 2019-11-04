import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(name, date){
  var presentation =(
    <div>
      <h2>Hello, I'm {name}</h2>
      <h3>Today is {date}</h3>
    </div>
  );
  return presentation;
}

function App() {
  var name = "Diego Matienzo";
  // var presentation = <h2>Hello, I'm {name} </h2>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project React-Start
        </p>
        { HelloWorld(name, Date(Date.now())) }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
