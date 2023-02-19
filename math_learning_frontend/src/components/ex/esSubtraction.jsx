import React from "react";
import GetEx from "./getEx";

const EsSubtraction = () => {
  return (
    <React.Fragment>
      <div className="subtraction-container">
        <h1>Subtraction Exercises:</h1>
        <div className="num-container">
          <GetEx url="http://127.0.0.1:8000/ex/es-subtraction/" sing={"-"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EsSubtraction;
