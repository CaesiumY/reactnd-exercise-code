import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreComponent from "./ScoreComponent";
import GameComponent from "./GameComponent";

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  };

  countSuccess = (correct) => {
    if (correct) {
      this.setState((state) => ({
        numCorrect: (state.numCorrect += 1),
      }));
    }
    this.setState((state) => ({
      numQuestions: (state.numQuestions += 1),
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <GameComponent countSuccess={this.countSuccess} />
          <ScoreComponent
            numQuestions={this.state.numQuestions}
            numCorrect={this.state.numCorrect}
          />
        </div>
      </div>
    );
  }
}

export default App;
