import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    echo: "This should mirror the text you typed into the input field!",
  };

  render() {
    const handleMsg = (msg) =>
      this.setState((state) => ({
        echo: msg,
      }));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            onChange={(event) => {
              handleMsg(event.target.value);
            }}
            value={this.state.echo}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.echo}</p>
        </div>
      </div>
    );
  }
}

export default App;
