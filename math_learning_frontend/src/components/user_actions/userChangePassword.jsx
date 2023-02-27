import React, { useState } from "react";
import ChangePasswordForm from "../common/changePasswordForm";
import { userChangePasswordFetch } from "../../services/auth";
import {
  changePasswordSchema,
  validateForm,
  handleChange,
} from "../../services/validate";

const UserChangePassword = () => {
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const [newPassword, setNewPassword] = useState({
    new_password: "",
    confirmPassword: "",
    current_password: "",
  });

  const schema = changePasswordSchema;

  const validateChangePasswordForm = () => {
    validateForm(newPassword, setError, schema);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleChange(
      name,
      value,
      schema,
      newPassword,
      setNewPassword,
      error,
      setError,
      setIsFormValid
    );
    if (event.target.name === "confirmPassword") {
      if (event.target.value !== newPassword.new_password) {
        setError({ ...error, confirmPassword: '"Password" must match' });
      } else {
        setError({ ...error, confirmPassword: null });
        setIsFormValid(false);
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    userChangePasswordFetch({ newPassword, setError, error });
  };

  return (
    <ChangePasswordForm
      error={error}
      handleChange={handleInputChange}
      newPassword={newPassword}
      validateForm={validateChangePasswordForm}
      isFormValid={isFormValid}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserChangePassword;
