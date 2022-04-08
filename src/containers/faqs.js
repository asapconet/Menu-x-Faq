import React from "react";
import "../sass/pages/_faqs.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { dummyFaq } from "../data/api";

const QHolders = ({ questions, answers }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className="faq--card">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="faq--header gap-x-3"
      >
        {questions}
        {!isClicked ? <FaPlus /> : <FaMinus />}
      </div>
      {isClicked && <div className="faq--res">{answers}</div>}
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="main">
      <h5 className="text-4xl m-4">What these guys ask alot of time</h5>
      <div className="faq--body">
        {dummyFaq.map((e) => {
          const { question, answer, id } = e;
          return (
            <>
              <QHolders key={id} questions={question} answers={answer} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
