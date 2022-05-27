import React from "react";
import "../sass/pages/_faqs.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { dummyFaq } from "../data/api";
import { Navigator } from "./navBar";

const QHolders = ({ questions, answers }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className="faq--card">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="faq--header pop pb-2 gap-x-3"
      >
        {questions}
        {!isClicked ? <FaPlus /> : <FaMinus />}
      </div>
      {isClicked && (
        <div className="faq--res border-t border-gray-500 ">{answers}</div>
      )}
    </div>
  );
};

const Faqs = () => {
  return (
    <>
      <Navigator />
      <div className="main">
        <h5 className="text-4xl m-4">What these guys ask alot of time</h5>
        <div className="faq--body">
          {dummyFaq.map((e) => {
            const { question, answer, id } = e;
            return (
              <div key={id} className="faq--items">
                <QHolders className="" questions={question} answers={answer} />
              </div>
            );
          })}
        </div>
        {/* <li class="dropdown dropdown-6">
          Scale Down
          <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
            <li class="dropdown_item-1">Item 1</li>
            <li class="dropdown_item-2">Item 2</li>
            <li class="dropdown_item-3">Item 3</li>
            <li class="dropdown_item-4">Item 4</li>
            <li class="dropdown_item-5">Item 5</li>
          </ul>
        </li> */}
      </div>
    </>
  );
};

export default Faqs;
