import CustomInput from "../common/customInpu";

const RegisterForm = ({
  error,
  user,
  handleChange,
  handleSubmit,
  validateForm,
  isFormValid,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {error.username && <div>{error.username}</div>}
      <CustomInput
        className="xd"
        type="text"
        name="nickname"
        value={user.nickname}
        onChange={handleChange}
        placeholder="Nickname"
      />
      {error.nickname && <div>{error.nickname}</div>}

      <CustomInput
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="email"
      />
      {error.email && <div>{error.email}</div>}

      <CustomInput
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
        placeholder="password"
      />
      {error.password && <div>{error.password}</div>}

      <CustomInput
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={user.confirmPassword}
        placeholder="confirm password"
      />
      {error.confirmPassword && <div>{error.confirmPassword}</div>}

      <CustomInput
        type="submit"
        value="submit"
        onClick={validateForm}
        disabled={isFormValid}
      />
    </form>
  );
};

export default RegisterForm;
