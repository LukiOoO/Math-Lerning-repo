import React from "react";
import CustomInput from "../common/customInput";

const LoginForm = ({
  handleSubmit,
  error,
  user,
  validateForm,
  isFormValid,
  handleChange,
}) => {
  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error.loginer && <div className="error-message">{error.loginer}</div>}
      {error.nickname && <div className="error-message">{error.nickname}</div>}
      <CustomInput
        className="login-input-nick"
        type="text"
        name="nickname"
        value={user.nickname}
        onChange={handleChange}
        placeholder="Nickname"
      />
      {error.password && <div className="error-message">{error.password}</div>}
      <CustomInput
        className="login-input-password"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <span>
        If you don't have an account then you can{" "}
        <a className="a-login-form" href="/register">
          create one
        </a>
      </span>
      <CustomInput
        className="login-input-sbmit"
        type="submit"
        value="Login"
        onClick={validateForm}
        disabled={isFormValid}
      />
    </form>
  );
};

export default LoginForm;
