import React from 'react';
import logo from './logo.svg';
import './App.css';
import './clickyBoard.js';
import Gameboard from './clickyBoard';

function App() {
  return (
    <div className="App d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="App-header masthead mb-auto">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            
          </nav>
        </div>
      </header>
      <main className="inner cover" role="main">
        <h1 className="cover-heading">Marvel Clicky Game</h1>
        <p className="lead">Click a picture below to begin. Keep clicking characters without clicking same picture twice to build your score.</p>
        
        <Gameboard />


      </main>

      <footer className="mastfood mt-auto">
        <div className="inner">
          <p className="footer-text"><a href="https://github.com/lauragreer3/gotclicky" className="gitlink">Marvel Clicky Game repository</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
