import React, { useEffect, useState } from "react";
import "./Quiz.scss";
const Quiz = () => {
  const max = Quizes.length - 1;
  const [current, setCurrent] = useState(0);
  // console.log(current, max)
  const [isDisabled, setIsDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  //   const [] = useState({);
  const next = () => {
    setCorrect()
    // setIsDisabled(p => !p)

    // if(current === max-1) {
    //     setIsNextDisabled(true)
    //     // or maybe change next to submit
    // } else {
    //     setIsNextDisabled(false)
    // }
    if (current < max) {
      setCurrent(current + 1);
    }
  };
  const previous = () => {
      setCorrect()
    //   setIsDisabled(p => !p)

    // if(current === 0) {
    //     setIsPrevDisabled(true)
    // } else {
    //     setIsPrevDisabled(false)
    // }
    if (current > 0) {
      setCurrent(current - 1);
      // call function to say(1st Question)
    }
  };

  const checkAns = (e) => {
    e.preventDefault();
    // console.log(e)
    const correctAnswer = Quizes[current].answers.find((el) => {
      if (el.value === e.target.innerHTML && el.isCorrect) return el;
      return false;
    });
    // setIsDisabled(true)
    if (correctAnswer) {
      setCorrect(true);
      setScore(p => p+1)
    } else {
      setCorrect(false);
    }
  };

  useEffect(() => {
    if (current === 0) {
      setIsPrevDisabled(true);
    } else {
      setIsPrevDisabled(false);
    }

    if (current === max) {
      setIsNextDisabled(true);
      // or maybe change next to submit
    } else {
      setIsNextDisabled(false);
    }
  }, [current, max]);

  return (
    <div className="quiz">
      <h3 className="question">{Quizes[current].question}</h3>
      <div className="answers">
        {Quizes[current].answers.map((answer, index) => (
          <button
            key={index}
            className="btn btn-answer"
            value={answer.value}
            onClick={checkAns}
            disabled={isDisabled}
          >
            {answer.value}
          </button>
        ))}
      </div>
      <div className="traversal-buttons">
        <button disabled={isPrevDisabled} onClick={previous}>
          PREVIOUS
        </button>
        <button disabled={isNextDisabled} onClick={next}>
          NEXT
        </button>
      </div>
      {correct === true && <p className="msg correct">Correct Answer</p>}
      {correct === false && <p className="msg wrong">Wrong Answer</p>}
        <p className="msg score">Current Score: {score}</p>
    </div>
  );
};

const Quizes = [
  {
    question: "React is mainly used for building ___.",
    answers: [
      { value: "Database", isCorrect: false },
      { value: "User interface", isCorrect: true },
      { value: "Connectivity", isCorrect: false },
      { value: "Design Platform", isCorrect: false },
    ],
  },
  {
    question: "Which method is not part of ReactDOM?",
    answers: [
      { value: "ReactDOM.destroy()", isCorrect: true },
      { value: "ReactDOM.hydrate()", isCorrect: false },
      { value: "ReactDOM.createPortal()", isCorrect: false },
      { value: "ReactDOM.findDOMNode()", isCorrect: false },
    ],
  },

  {
    question: "The lifecycle methods are mainly used for ___.",
    answers: [
      { value: "keeping track of event history", isCorrect: false },
      { value: "enhancing components", isCorrect: false },
      { value: "freeing up resources", isCorrect: true },
      { value: "none of the above", isCorrect: false },
    ],
  },
];

export default Quiz;
