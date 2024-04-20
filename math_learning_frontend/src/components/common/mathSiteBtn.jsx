import React from "react";

const MathSiteBtn = ({ type, id, value, className, disabled, ...rest }) => {
  return (
    <React.Fragment>
      <button
        type={type}
        id={id}
        value={value}
        className={className}
        disabled={disabled}
        {...rest}
      >
        <span> </span>
        {value}
      </button>
    </React.Fragment>
  );
};

export default MathSiteBtn;
