import React from "react";

export default function AnswerButton({ handleSubmit }) {
  return (
    <div>
      <button name="true" onClick={handleSubmit}>
        True
      </button>
      <button name="false" onClick={handleSubmit}>
        False
      </button>
    </div>
  );
}
