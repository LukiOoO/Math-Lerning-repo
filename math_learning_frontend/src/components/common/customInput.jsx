const CustomInput = ({
  type,
  name,
  value,
  onChange,
  onClick,
  placeholder,
  disabled,
  style,
  id,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      disabled={disabled}
      style={style}
      id={id}
      className={className}
    />
  );
};

export default CustomInput;
