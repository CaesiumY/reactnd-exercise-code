import React, { Component } from "react";
import AnswerButton from "./AnswerButton";

export default class GameComponent extends Component {
  constructor(prop) {
    super(prop);
    const randomValues = this.getRandomValues();
    this.state = {
      value1: randomValues[0],
      value2: randomValues[1],
      value3: randomValues[2],
      answer: randomValues[3],
      realAnswer: 0,
    };
  }

  getRandomValues = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, proposedAnswer];
  };

  makeNewQuestion = () => {
    const randomValues = this.getRandomValues();

    this.setState((state) => ({
      value1: randomValues[0],
      value2: randomValues[1],
      value3: randomValues[2],
      answer: randomValues[3],
    }));

    console.log(this.state.answer);
  };

  handleSubmit = (event) => {
    const { value1, value2, value3, answer } = this.state;
    const { countSuccess } = this.props;
    const userAnswer = event.target.name;

    if (value1 + value2 + value3 === answer && userAnswer === "true") {
      console.log("정답");
      countSuccess(true);
    } else if (value1 + value2 + value3 !== answer && userAnswer === "false") {
      console.log("정답");
      countSuccess(true);
    } else {
      console.log("오답");
      countSuccess(false);
    }
    this.setState((state) => ({
      realAnswer: value1 + value2 + value3,
    }));
    this.makeNewQuestion();
  };

  render() {
    const { value1, value2, value3, answer, realAnswer } = this.state;
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${answer}`}</p>
        </div>
        <AnswerButton handleSubmit={this.handleSubmit} />
        {realAnswer === 0 ? <p></p> : <p>Answer was {realAnswer}</p>}
      </div>
    );
  }
}
