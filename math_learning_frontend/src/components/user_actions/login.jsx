import React, { useState } from "react";
import LoginForm from "../common/loginForm";
import { loginUser } from "../../services/auth";
import {
  loginSchema,
  validateForm,
  handleChange,
} from "../../services/validate";

const Login = () => {
  const [error, setError] = useState({});

  const [isFormValid, setIsFormValid] = useState(true);

  const [user, setUser] = useState({
    nickname: "",
    password: "",
  });

  const schema = loginSchema;

  const validateLoginForm = () => {
    validateForm(user, setError, schema);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleChange(
      name,
      value,
      schema,
      user,
      setUser,
      error,
      setError,
      setIsFormValid
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ user, setError, error });
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      error={error}
      user={user}
      validateForm={validateLoginForm}
      isFormValid={isFormValid}
      handleChange={handleInputChange}
    />
  );
};
export default Login;
