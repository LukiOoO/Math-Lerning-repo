import React from "react";
import GetEx from "./getEx";

const AdMultiplication = () => {
  return (
    <React.Fragment>
      <div className="multiplication-container">
        <h1>Multiplication Exercises:</h1>
        <div className="num-container">
          <GetEx
            url="http://127.0.0.1:8000/ex/mid-multiplication/"
            sing={"*"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdMultiplication;
