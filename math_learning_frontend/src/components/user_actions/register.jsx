import React, { useState } from "react";
import Joi from "joi-browser";
import { useHistory } from "react-router-dom";
import RegisterForm from "../common/registerForm";

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

  const schema = {
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(5).label("Password"),
    confirmPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } })
      .label("confirm password"),
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
    }
    if (event.target.name === "confirmPassword") {
      if (event.target.value !== user.password) {
        setError({ ...error, confirmPassword: '"Password" must match' });
      } else {
        setError({ ...error, confirmPassword: null });
        setIsFormValid(false);
      }
    }

    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 400) {
          setError({ ...error, username: "The user already exists" });
          return;
        } else if (res.status !== 400) {
          history.push("/login");
        }
        res.json();
      })
      .then((data) => {})
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError({ ...error, username: error.response.data });
        }
      });
  };

  return (
    <RegisterForm
      error={error}
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      validateForm={validateForm}
      isFormValid={isFormValid}
    />
  );
};

export default Register;
