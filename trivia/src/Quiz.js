import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=10";

// const shuffleArray = (array) => {
//   const shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };
function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [presentQuestionIndex, setPresentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  //   const [button, setButton] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)

      .then((response) => {
        setQuiz(response.data.results);
        setTotalQuestions(response.data.results.length);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const mappedData = quiz.map((quizItem) => {
      const options = [quizItem.correct_answer, ...quizItem.incorrect_answers];

      const shuffledOptions = shuffleArray(options);

      return {
        question: quizItem.question,

        correctAnswer: quizItem.correct_answer,

        options: shuffledOptions,
      };
    });

    setMappedQuiz(mappedData);

    setCurrentQuestion(mappedData[count]);

    console.log(currentQuestion);
  }, [quiz]);

  if (quiz.length === 0) return null;

  const handleClick = (answer) => {
    setSelectAnswer(answer);

    // if (answer === correctAnswer) {
    //   setButton(true);
    // }
  };

  const handleNext = () => {
    setSelectAnswer(false);
    setPresentQuestionIndex(presentQuestionIndex + 1);
  };
  if (!quiz) return null;

  const currentQuestion = quiz[presentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div>
        <h2>Quiz completed</h2>
      </div>
    );
  }
  return (
    <div className="quiz">
      <h2>{currentQuestion.question}</h2>
      <div className="answers">
        {currentQuestion.incorrect_answers.map((incorrectAnswer, i) => (
          <button
            key={i}
            onClick={() => handleClick(incorrectAnswer)}
            style={{
              backgroundColor: selectAnswer === incorrectAnswer ? "red" : "",
            }}
          >
            {incorrectAnswer}
          </button>
        ))}
        <button
          onClick={() => handleClick(currentQuestion.correct_answer)}
          style={{
            backgroundColor:
              selectAnswer === currentQuestion.correct_answer ? "green" : "",
          }}
          className="btn-1"
        >
          {currentQuestion.correct_answer}
        </button>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default Quiz;
