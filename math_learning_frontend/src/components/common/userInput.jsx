import React from "react";

const UserInput = ({ type, nickname, value, placeholder, ...rest }) => {
  return (
    <input
      type={type}
      name={nickname}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default UserInput;
