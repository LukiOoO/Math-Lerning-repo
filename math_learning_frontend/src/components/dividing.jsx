import React from "react";
import MathForm from "./common/mathForm";

const Dividing = () => {
  return (
    <React.Fragment>
      <div className="dividing-container">
        <h1>Dividing Exercises:</h1>
        <div className="container">
          <MathForm url="http://127.0.0.1:8000/ex/dividing/" sing={"/"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dividing;
