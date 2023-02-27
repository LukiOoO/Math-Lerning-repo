import Joi from "joi-browser";

export const loginSchema = {
  nickname: Joi.string().required(),
  password: Joi.string().required(),
};

export const registerSchema = {
  nickname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5).label("Password"),
  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({ language: { any: { allowOnly: "must match password" } } })
    .label("confirm password"),
};

export const changePasswordSchema = {
  new_password: Joi.string().required().min(5).label("New password"),
  confirmPassword: Joi.any()
    .valid(Joi.ref("new_password"))
    .required()
    .options({ language: { any: { allowOnly: "must match password" } } })
    .label("confirm password"),
  current_password: Joi.string().required().label("Current password"),
};

export const validateForm = (object, setError, schema) => {
  const options = { abortEarly: false };
  const result = Joi.validate(object, schema, options);
  if (!result.error) return setError({});
  const errors = {};
  for (let item of result.error.details) {
    if (object[item.path[0]] !== "") continue;
    errors[item.path[0]] = item.message;
  }
  setError(errors);
};

const validateProperty = (name, value, schema) => {
  const obj = { [name]: value };
  const propertySchema = { [name]: schema[name] };
  const result = Joi.validate(obj, propertySchema);
  return result.error ? result.error.details[0].message : null;
};

export const handleChange = (
  name,
  value,
  schema,
  values,
  setValues,
  error,
  setError,
  setIsFormValid
) => {
  const errorMessage = validateProperty(name, value, schema);
  if (errorMessage) {
    setError({ ...error, [name]: errorMessage });
  } else {
    setError({ ...error, [name]: null });
    setIsFormValid(false);
  }
  setValues({ ...values, [name]: value });
};
