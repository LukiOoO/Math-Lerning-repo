import React from "react";
import CustomInput from "../common/customInput";

const ChangePasswordForm = ({
  error,
  handleChange,
  newPassword,
  validateForm,
  isFormValid,
  handleSubmit,
}) => {
  return (
    <div className="change-password-container">
      <form onSubmit={handleSubmit} className="change-password-form">
        {error.change_password && (
          <div className="error-message">{error.change_password}</div>
        )}
        {error.new_password && (
          <div className="error-message">{error.new_password}</div>
        )}
        <CustomInput
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
        <CustomInput
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
        <CustomInput
          type="password"
          placeholder="Current password"
          value={newPassword.current_password}
          name="current_password"
          className="old-password"
          onChange={handleChange}
        />
        <CustomInput
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

export default ChangePasswordForm;
