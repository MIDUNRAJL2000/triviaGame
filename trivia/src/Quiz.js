import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

const baseURL = "https://opentdb.com/api.php?amount=10";
function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [presentQuestionIndex, setPresentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(baseURL)

  //     .then((response) => {
  //       setQuiz(response.data.results);
  //       setTotalQuestions(response.data.results.length);
  //     })

  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setQuiz(response.data.results);
        setTotalQuestions(response.data.results.length);
        const currentQuestion = response.data.results[presentQuestionIndex];
        const answers = [
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer,
        ];
        setShuffledAnswers(shuffle(answers));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [presentQuestionIndex]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleClick = (answer) => {
    if (selectAnswer === null) {
      setSelectAnswer(answer);

      if (answer === quiz[presentQuestionIndex].correct_answer) {
        setCorrectAnswers(correctAnswers + 1);
      }

      // if (answer === correctAnswer) {
      //   setButton(true);
      // }
    }
  };

  const handleNext = () => {
    setSelectAnswer(null);
    setPresentQuestionIndex(presentQuestionIndex + 1);
  };
  if (!quiz) return null;
  if (presentQuestionIndex >= totalQuestions) {
    return (
      <Results
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
      />
    );
  }

  const currentQuestion = quiz[presentQuestionIndex];
  return (
    <div className="quiz">
      <h2>{currentQuestion.question}</h2>
      <div className="answers">
        {shuffledAnswers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleClick(answer)}
            style={{
              backgroundColor:
                selectAnswer === answer
                  ? answer === currentQuestion.correct_answer
                    ? "lightgreen"
                    : "red"
                  : "",
            }}
            disabled={selectAnswer !== null}
          >
            {answer}
          </button>
        ))}
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default Quiz;
