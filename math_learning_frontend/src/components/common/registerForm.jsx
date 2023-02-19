import CustomInput from "./customInput";

const RegisterForm = ({
  error,
  user,
  handleChange,
  handleSubmit,
  validateForm,
  isFormValid,
}) => {
  return (
    <form onSubmit={handleSubmit} className="register-form">
      {error.username && <div className="error-message">{error.username}</div>}
      <CustomInput
        className="register-nickname"
        type="text"
        name="nickname"
        value={user.nickname}
        onChange={handleChange}
        placeholder="Nickname"
      />
      {error.nickname && <div className="error-message">{error.nickname}</div>}

      <CustomInput
        className="register-email"
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="email"
      />
      {error.email && <div className="error-message">{error.email}</div>}

      <CustomInput
        className="register-password1"
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
        placeholder="password"
      />
      {error.password && <div className="error-message">{error.password}</div>}

      <CustomInput
        className="register-password2"
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={user.confirmPassword}
        placeholder="confirm password"
      />
      {error.confirmPassword && (
        <div className="error-message">{error.confirmPassword}</div>
      )}
      <span>
        If you already have an account you can log{" "}
        <a className="a-login-form" href="/login">
          in here
        </a>
      </span>

      <CustomInput
        type="submit"
        className="register-submit"
        value="Register"
        onClick={validateForm}
        disabled={isFormValid}
      />
    </form>
  );
};

export default RegisterForm;
