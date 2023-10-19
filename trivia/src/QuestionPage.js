// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const baseURL = "https://opentdb.com/api.php?amount=10";

// // const QuestionPage = ({ onFinish }) => {
// //   const [presentquestion, setPresentQuestion] = useState(0);
// //   const [selectAnswer, setSelectAnswer] = useState(null);
// //   const [correctAnswer, setCorrectAnswer] = useState(null);
// //   const [score, setScore] = useState(0);
// //   const [quiz, setQuiz] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get(baseURL)

// //       .then((response) => {
// //         setQuiz(response.data.results);
// //       })

// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //       });
// //   }, []);

// //   const handleAnswerSelection = (answer) => {
// //     setSelectAnswer(answer);
// //   };
// //   const handleSubmit = () => {
// //     if (selectAnswer === correctAnswer) {
// //       setScore(score + 1);
// //     }
// //     if (presentquestion === questions.length - 1) {
// //       onFinish();
// //     } else {
// //       setPresentQuestion(presentquestion + 1);
// //     }
// //   };

// //   const renderQuestion = () => {
// //     const question = questions[presentquestion];

// //     return (
// //       <div>
// //         <h1>{question.question}</h1>
// //         <ul>
// //           {question.answer_choices.map((answer, index) => (
// //             <li key={index}>
// //               <input
// //                 type="radio"
// //                 name="answer"
// //                 value={answer}
// //                 checked={selectAnswer === answer}
// //                 onChange={() => handleAnswerSelection(answer)}
// //               />
// //               {answer}
// //             </li>
// //           ))}
// //         </ul>
// //         <button onClick={handleSubmit}>Submit</button>
// //       </div>
// //     );
// //   };

// //   return <div>{renderQuestion()}</div>;
// // };

// // export default QuestionPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const baseURL = "https://opentdb.com/api.php?amount=10";

// const QuestionPage = ({ onFinish }) => {
//   const [presentQuestion, setPresentQuestion] = useState(0);
//   const [selectAnswer, setSelectAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     axios
//       .get(baseURL)
//       .then((response) => {
//         setQuestions(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleAnswerSelection = (answer) => {
//     setSelectAnswer(answer);
//   };

//   const handleSubmit = () => {
//     const question = questions[presentQuestion];
//     if (selectAnswer === question.correct_answer) {
//       setScore(score + 1);
//     }
//     if (presentQuestion === questions.length - 1) {
//       onFinish();
//     } else {
//       setPresentQuestion(presentQuestion + 1);
//       setSelectAnswer(null); // Reset selected answer for the next question
//     }
//   };

//   const renderQuestion = () => {
//     const question = questions[presentQuestion];

//     return (
//       <div>
//         <h1>{question.question}</h1>
//         <ul>
//           {question.incorrect_answers.map((answer, index) => (
//             <li key={index}>
//               <input
//                 type="radio"
//                 name="answer"
//                 value={answer}
//                 checked={selectAnswer === answer}
//                 onChange={() => handleAnswerSelection(answer)}
//               />
//               {answer}
//             </li>
//           ))}
//         </ul>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     );
//   };

//   return <div>{renderQuestion()}</div>;
// };

// export default QuestionPage;
