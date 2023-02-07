import React from "react";

const MathSiteBtn = ({ type, id, value, ...rest }) => {
  return (
    <React.Fragment>
      <button type={type} id={id} value={value} className="btn">
        <span> </span>
        {value}
      </button>
    </React.Fragment>
  );
};

export default MathSiteBtn;
