import MathSiteBtn from "../common/mathSiteBtn";
import { Link } from "react-router-dom";
import React from "react";

const TestResultShowScore = (props) => {
  const { mistakes, correct } = props.location.state;

  return (
    <React.Fragment>
      <div className="test-result-container">
        <p>Correct answers: {correct}</p>
        <span className="correct"></span>
        <p>Mistakes answers: {mistakes}</p>
        <span className="mistakes"></span>

        <Link to="/test-lvl">
          <MathSiteBtn
            type="button"
            value="Next Test"
            className="next-test-btn"
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default TestResultShowScore;
