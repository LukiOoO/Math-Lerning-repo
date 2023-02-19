import React from "react";
import GetEx from "./getEx";

const EsAdding = () => {
  return (
    <React.Fragment>
      <div className="adding-container">
        <h1>Adding Exercises:</h1>
        <div className="num-container">
          <GetEx url="http://127.0.0.1:8000/ex/es-adding/" sing={"+"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EsAdding;
