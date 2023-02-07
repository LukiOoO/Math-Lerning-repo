import React from "react";
import MathForm from "./common/mathForm";

const Subtraction = () => {
  return (
    <React.Fragment>
      <div className="subtraction-container">
        <h1>Subtraction Exercises:</h1>
        <div className="container">
          <MathForm url="http://127.0.0.1:8000/ex/subtraction/" sing={"-"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Subtraction;
