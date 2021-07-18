import React, { useState } from "react";

// import { Accordion } from "react-bootstrap";

const FaqQuestion = ({ question, index }) => {
  const [show, setShow] = useState(false);
  return (
    //   <div className="questions mb-3" id="questions">
    // <h2 className="question-header" id={index}>
    //   <button
    //     className="accordion-button collapsed"
    //     type="button"
    //     data-bs-toggle="collapse"
    //     data-bs-target = {index}
    //     aria-expanded="true"
    //     aria-controls="collapseOne"
    //   >
    //     {question.Question}
    //   </button>
    //     </h2>
    // <div
    //   id={index}
    //   className="accordion-collapse collapse"
    //   aria-labelledby="questionOne"
    //   data-bs-parent="#FAQ"
    // >
    //   <div className="answer-body">{question.Answer}</div>
    // </div>
    //   </div>
    <div className="questions mb-3" id="questions">
      <h4 className="question-header">
        <button
          className="accordion-button collapsed "
          type="button"
          onClick={(e) => {
            setShow(!show);
            e.target.classList.toggle("collapsed");
            console.log(e.target.classList);
          }}
        >
          {question.Question}
        </button>
      </h4>
      {show && (
        <div id={index} className="accordion-collapse collapse show">
          <div className="answer-body">{question.Answer}</div>
        </div>
      )}
    </div>
  );
};

export default FaqQuestion;
