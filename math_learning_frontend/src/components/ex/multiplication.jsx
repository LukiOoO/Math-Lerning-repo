import React from "react";
import GetExService from "../../services/getExService";

const Multiplication = () => {
  return (
    <React.Fragment>
      <div className="multiplication-container">
        <h1>Multiplication Exercises:</h1>
        <div className="container">
          <GetExService
            url="http://127.0.0.1:8000/ex/multiplication/"
            sing={"*"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Multiplication;
