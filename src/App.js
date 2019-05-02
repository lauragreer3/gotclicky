import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="App-header masthead mb-auto">
        <div className="inner">
          <div className="title text-center"><h3 className="masthead-brand">Marvel Clicky Game</h3></div>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Reset</a>
            <div className="scoreLabel nav-link">
              Score: <span className="score" id="score">0</span>
            </div>
          </nav>
        </div>
      </header>
      <main className="inner cover" role="main">
        <h1 className="cover-heading">Marvel Clicky Game</h1>
        <p className="lead">Click a picture below to begin. Keep clicking characters without clicking same picture twice to build your score.</p>

        <div id="game_pictures" className="container">
          <div role="img" aria-label="click item" className="click-item shake" style={{ backgroundImage:"url(/game_images/loki.png)"}}></div>
          
        </div>


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
