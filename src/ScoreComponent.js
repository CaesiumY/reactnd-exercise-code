import React from "react";

export default function ScoreComponent({ numCorrect, numQuestions }) {
  return (
    <p className="text">
      Your Score: {numCorrect}/{numQuestions}
    </p>
  );
}
