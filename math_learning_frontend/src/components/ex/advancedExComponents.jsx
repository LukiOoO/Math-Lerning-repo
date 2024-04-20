import React from "react";
import GetEx from "../common/getEx";

export const AdAdding = () => {
  return (
    <React.Fragment>
      <div className="adding-container">
        <h1>Adding Exercises:</h1>
        <div className="num-container">
          <GetEx url="http://127.0.0.1:8000/ex/mid-adding/" sing={"+"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export const AdSubtraction = () => {
  return (
    <React.Fragment>
      <div className="subtraction-container">
        <h1>Subtraction Exercises:</h1>
        <div className="num-container">
          <GetEx url="http://127.0.0.1:8000/ex/mid-subtraction/" sing={"-"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export const AdMultiplication = () => {
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

export const AdDividing = () => {
  return (
    <React.Fragment>
      <div className="dividing-container">
        <h1>Dividing Exercises:</h1>
        <div className="num-container">
          <GetEx url="http://127.0.0.1:8000/ex/mid-dividing/" sing={"/"} />
        </div>
      </div>
    </React.Fragment>
  );
};
