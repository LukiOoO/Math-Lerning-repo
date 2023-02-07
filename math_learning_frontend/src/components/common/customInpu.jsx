const CustomInput = ({
  type,
  name,
  value,
  onChange,
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
      placeholder={placeholder}
      disabled={disabled}
      style={style}
      id={id}
      className={className}
    />
  );
};

export default CustomInput;
