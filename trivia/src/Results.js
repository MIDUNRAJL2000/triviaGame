import React from "react";

const Results = ({ correctAnswers, totalQuestions }) => {
  const wrongAnswers = totalQuestions - correctAnswers;

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <span>Quiz Result</span>
      <p>Correct Answers:{correctAnswers}</p>
      <p>Wrong Answers: {wrongAnswers}</p>
      <button onClick={refreshPage}>START AGAIN</button>
    </div>
  );
};

export default Results;
