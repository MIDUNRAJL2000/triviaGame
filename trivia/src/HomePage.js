import React, { useState } from "react";
import Quiz from "./Quiz";

function HomePage() {
  const [quizStart, setQuizStart] = useState(false);

  const startQuiz = () => {
    setQuizStart(true);
  };

  return (
    <div className="home">
      {quizStart ? (
        <Quiz />
      ) : (
        <div className="welcome">
          <span>Welcome to Quiz</span>
          <div>
            <button onClick={startQuiz} className="btn">
              Play the Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
