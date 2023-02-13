import React from "react";
import GetEx from "./getEx";

const Multiplication = () => {
  return (
    <React.Fragment>
      <div className="multiplication-container">
        <h1>Multiplication Exercises:</h1>
        <div className="num-container">
          <GetEx url="http://127.0.0.1:8000/ex/multiplication/" sing={"*"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Multiplication;
