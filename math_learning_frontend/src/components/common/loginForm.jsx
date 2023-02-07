import React from "react";
import CustomInput from "../common/customInpu";

const LoginForm = ({
  handleSubmit,
  error,
  user,
  validateForm,
  isFormValid,
  handleChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {error.loginer && <div>{error.loginer}</div>}

      {error.nickname && <div>{error.nickname}</div>}

      <CustomInput
        type="text"
        name="nickname"
        value={user.nickname}
        onChange={handleChange}
        placeholder="Nickname"
      />
      {error.password && <div>{error.password}</div>}

      <CustomInput
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <CustomInput
        type="submit"
        value="Login"
        onClick={validateForm}
        disabled={isFormValid}
      />
    </form>
  );
};

export default LoginForm;
