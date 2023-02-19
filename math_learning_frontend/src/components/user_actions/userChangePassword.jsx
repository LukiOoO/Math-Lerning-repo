import React, { useState, useEffect } from "react";
import CustomInput from "../common/customInput";
import Joi from "joi-browser";
import { loginUser } from "../../services/loginService";
import { Route, Redirect, Switch, Link } from "react-router-dom";

const UserChangePassword = () => {
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const [youLastTests, setLastTests] = useState([]);

  const [newPassword, setNewPassword] = useState({
    new_password: "",
    confirmPassword: "",
    current_password: "",
  });

  const schema = {
    new_password: Joi.string().required().min(5).label("New password"),
    confirmPassword: Joi.any()
      .valid(Joi.ref("new_password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } })
      .label("confirm password"),
    current_password: Joi.string().required().label("Current password"),
  };
  const validateForm = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(newPassword, schema, options);

    if (!result.error) return setError({});

    const errors = {};
    for (let item of result.error.details) {
      if (newPassword[item.path[0]] !== "") continue;
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
      if (event.target.value !== newPassword.new_password) {
        setError({ ...error, confirmPassword: '"Password" must match' });
      } else {
        setError({ ...error, confirmPassword: null });
        setIsFormValid(false);
      }
      if (event.target.name === "current_password") {
        if (event.target.value === null) {
          setError({ ...error, current_password: '"Password" must match' });
        } else {
          setError({ ...error, current_password: null });
          setIsFormValid(false);
        }
      }
    }
    setNewPassword({ ...newPassword, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/auth/users/set_password/", {
      method: "POST",
      headers: {
        Authorization: "JWT " + localStorage.getItem("jwtToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_password: newPassword.new_password,
        current_password: newPassword.current_password,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          setError({
            ...error,
            change_password: "zzzz error",
          });
          return;
        } else if (res.status !== 400) {
          if (res.ok) {
            // pomyślnie ustawiono nowe hasło, można przeprowadzić proces logowania użytkownika
            return fetch("http://127.0.0.1:8000/auth/jwt/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nickname: localStorage.getItem("nickname"),
                password: newPassword.new_password, // użyj nowego hasła do logowania
              }),
            });
          } else {
            throw new Error("Błąd ustawiania hasła.");
          }
        }
      })
      .then((res) => {
        if (res.ok) {
          window.close();
        }
      })
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/mathuser/show-user-score/", {
      headers: {
        Authorization: "JWT " + localStorage.getItem("jwtToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => setLastTests(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="change-password-container">
      {error.change_password && (
        <div className="error-message">{error.change_password}</div>
      )}
      <form onSubmit={handleSubmit} className="change-password-form">
        {error.new_password && (
          <div className="error-message">{error.new_password}</div>
        )}
        <input
          type="password"
          placeholder="New password"
          value={newPassword.new_password}
          name="new_password"
          className="new-password"
          onChange={handleChange}
        />
        {error.confirmPassword && (
          <div className="error-message">{error.confirmPassword}</div>
        )}
        <input
          type="password"
          placeholder="Confirm new password"
          value={newPassword.confirmPassword}
          name="confirmPassword"
          className="confirm-new-password"
          onChange={handleChange}
        />
        {error.current_password && (
          <div className="error-message">{error.current_password}</div>
        )}
        <input
          type="password"
          placeholder="Current password"
          value={newPassword.current_password}
          name="current_password"
          className="old-password"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Change"
          className="submit-new-password"
          onClick={validateForm}
          disabled={isFormValid}
        />
      </form>
    </div>
  );
};

export default UserChangePassword;
