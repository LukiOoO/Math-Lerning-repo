import React, { useState, useEffect } from "react";
import CustomInput from "../common/customInput";
import Joi from "joi-browser";
import { loginUser } from "../../services/loginService";
import { Route, Redirect, Switch, Link } from "react-router-dom";

import MathSiteBtn from "../common/mathSiteBtn";
// import Test from "./../math_test/tests";

const UserProfilePage = () => {
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
    <React.Fragment>
      <div className="user-profile-container">
        <div className="change-password-container">
          <p className="p-change-password">
            if you want to change your password you can do it here{" "}
          </p>
          <Link to="/change-password" target="_blank">
            <MathSiteBtn
              value="CLick to Change Password"
              className="open-password-page"
            />{" "}
          </Link>
        </div>

        <div className="user-last-tests-container">
          <h2>These are your latest tests</h2>
          <ol className="last-tests-ol">
            {youLastTests.map((test, index) => (
              <li key={index}>
                Correct: {test.correct} Mistakes: {test.mistakes}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserProfilePage;
