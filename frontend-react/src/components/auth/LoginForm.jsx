import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, FieldSet, Input, Saperator } from "../";
import GoogleSignUp from "./GoogleSignUp";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <FieldSet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field error={errors.email}>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Incorrect email address",
              },
            })}
            type="email"
            variant="formInput"
            isError={!!errors.email}
            placeholder="Phone number, username, or email"
          />
        </Field>

        {/* Password Field */}
        <Field error={errors.password}>
          <Input
            {...register("password", {
              required: "password is required",
              minLength: 6,
              maxLength: 20,
            })}
            type={showPassword ? "text" : "password"}
            variant="formInput"
            isError={!!errors.password}
            placeholder="Password"
          />
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </Field>

        {/* Login Button */}
        <Field className="mb-4">
          <button type="submit" className="login-button">
            Log in
          </button>
        </Field>
      </form>

      <Saperator />

      <GoogleSignUp />
    </FieldSet>
  );
};
export default LoginForm;
