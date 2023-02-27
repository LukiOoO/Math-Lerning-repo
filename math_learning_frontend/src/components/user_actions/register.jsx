import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from "../common/registerForm";
import { registerUser } from "../../services/auth";
import {
  registerSchema,
  validateForm,
  handleChange,
} from "../../services/validate";

const Register = () => {
  const [error, setError] = useState({});
  const history = useHistory();
  const [isFormValid, setIsFormValid] = useState(true);

  const [user, setUser] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const schema = registerSchema;

  const validateRegisterForm = () => {
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
    if (event.target.name === "confirmPassword") {
      if (event.target.value !== user.password) {
        setError({ ...error, confirmPassword: '"Password" must match' });
      } else {
        setError({ ...error, confirmPassword: null });
        setIsFormValid(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser({ user, setError, error, history });
  };

  return (
    <RegisterForm
      error={error}
      user={user}
      handleChange={handleInputChange}
      handleSubmit={handleSubmit}
      validateForm={validateRegisterForm}
      isFormValid={isFormValid}
    />
  );
};
export default Register;
