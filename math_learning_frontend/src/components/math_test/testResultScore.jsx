const TestResultShowScore = (props) => {
  const { mistakes, correct } = props.location.state;
  return (
    <div className="test-result-container">
      <p>Correct answers: {correct}</p>
      <span className="correct"></span>
      <p>Mistakes answers: {mistakes}</p>
      <span className="mistakes"></span>
    </div>
  );
};

export default TestResultShowScore;
