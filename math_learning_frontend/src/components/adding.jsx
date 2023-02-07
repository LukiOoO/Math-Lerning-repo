import React from "react";
import MathForm from "./common/mathForm";

const Adding = () => {
  return (
    <React.Fragment>
      <div className="adding-container">
        <h1>Adding Exercises:</h1>
        <div className="container">
          <MathForm url="http://127.0.0.1:8000/ex/adding/" sing={"+"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Adding;
