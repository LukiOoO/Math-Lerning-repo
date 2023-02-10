const TestResultShowScore = (props) => {
  const { mistakes, correct } = props.location.state;
  return (
    <div>
      <h1>
        <p>Correct answers: {correct}</p>
        <p>Mistakes answers: {mistakes}</p>
      </h1>
    </div>
  );
};

export default TestResultShowScore;
