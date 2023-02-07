import React from "react";
import GetExService from "../../services/getExService";

const Dividing = () => {
  return (
    <React.Fragment>
      <div className="dividing-container">
        <h1>Dividing Exercises:</h1>
        <div className="container">
          <GetExService url="http://127.0.0.1:8000/ex/dividing/" sing={"/"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dividing;
