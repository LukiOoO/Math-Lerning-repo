import React from "react";
import GetExService from "../../services/getExService";

const Subtraction = () => {
  return (
    <React.Fragment>
      <div className="subtraction-container">
        <h1>Subtraction Exercises:</h1>
        <div className="container">
          <GetExService
            url="http://127.0.0.1:8000/ex/subtraction/"
            sing={"-"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Subtraction;
