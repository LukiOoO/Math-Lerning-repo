import React, { useState } from "react";
import Joi from "joi-browser";
import { loginUser } from "../../services/loginService";

import LoginForm from "../common/loginForm";

const Login = () => {
  const [error, setError] = useState({});

  const [isFormValid, setIsFormValid] = useState(true);

  const [user, setUser] = useState({
    nickname: "",
    password: "",
  });

  const schema = {
    nickname: Joi.string().required(),
    password: Joi.string().required(),
  };

  const validateForm = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(user, schema, options);

    if (!result.error) return setError({});

    const errors = {};
    for (let item of result.error.details) {
      if (user[item.path[0]] !== "") continue;
      errors[item.path[0]] = item.message;
    }
    setError(errors);
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const propertySchema = { [name]: schema[name] };
    const result = Joi.validate(obj, propertySchema);
    return result.error ? result.error.details[0].message : null;
  };

  const handleChange = (event) => {
    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      setError({ ...error, [event.target.name]: errorMessage });
    } else {
      setError({ ...error, [event.target.name]: null });
      setIsFormValid(false);
    }
    setUser({ ...user, [event.target.name]: event.target.value });
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
      validateForm={validateForm}
      isFormValid={isFormValid}
      handleChange={handleChange}
    />
  );
};
export default Login;
