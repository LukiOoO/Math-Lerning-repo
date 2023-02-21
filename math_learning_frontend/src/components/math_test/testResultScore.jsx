import MathSiteBtn from "../common/mathSiteBtn";
import { Link } from "react-router-dom";

const TestResultShowScore = (props) => {
  const { mistakes, correct } = props.location.state;
  return (
    <div className="test-result-container">
      <p>Correct answers: {correct}</p>
      <span className="correct"></span>
      <p>Mistakes answers: {mistakes}</p>
      <span className="mistakes"></span>

      <Link to="/test-lvl">
        <MathSiteBtn
          type="button"
          id=""
          value="Next Test"
          className="next-test-btn"
        />
      </Link>
    </div>
  );
};

export default TestResultShowScore;
