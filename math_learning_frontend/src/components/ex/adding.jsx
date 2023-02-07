import React from "react";
import GetExService from "../../services/getExService";

const Adding = () => {
  return (
    <React.Fragment>
      <div className="adding-container">
        <h1>Adding Exercises:</h1>
        <div className="container">
          <GetExService url="http://127.0.0.1:8000/ex/adding/" sing={"+"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Adding;
