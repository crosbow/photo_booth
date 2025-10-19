import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, FieldSet, Input, Saperator } from "../";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  return (
    <FieldSet heading="Sign up to see photos and videos from your friends.">
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

        <Field error={errors.fullName}>
          <Input
            {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be greater or equal 3 character",
              },
              maxLength: {
                value: 30,
                message: "Name must be less or equal 30 character",
              },
            })}
            type="fullName"
            variant="formInput"
            isError={!!errors.fullName}
            placeholder="Full Name"
          />
        </Field>

        {/* Password Field */}
        <Field error={errors.password}>
          <Input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "Password must be greater or equal 6 char",
              },
              maxLength: {
                value: 20,
                message: "Password must be less or equal 20 char",
              },
            })}
            type={showPassword.password ? "text" : "password"}
            variant="formInput"
            isError={!!errors.password}
            placeholder="Password"
          />
          <button
            onClick={() =>
              setShowPassword((prev) => ({ ...prev, password: !prev.password }))
            }
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
          >
            {showPassword.password ? "Hide" : "Show"}
          </button>
        </Field>

        <Field error={errors.confirmPassword}>
          <Input
            {...register("confirmPassword", {
              required: " confirm password is required",
              minLength: {
                value: 6,
                message: "Password must be greater or equal 6 char",
              },
              maxLength: {
                value: 20,
                message: "Password must be less or equal 20 char",
              },
              validate: (value) => {
                if (watch("password") != value) {
                  return "Password do not match";
                }
              },
            })}
            type={showPassword.confirmPassword ? "text" : "password"}
            variant="formInput"
            isError={!!errors.confirmPassword}
            placeholder="Password"
          />
          <button
            onClick={() =>
              setShowPassword((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
              }))
            }
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
          >
            {showPassword.confirmPassword ? "Hide" : "Show"}
          </button>
        </Field>

        {/* Login Button */}
        <Field className="mb-4">
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </Field>
      </form>

      <Saperator />
    </FieldSet>
  );
};
export default RegisterForm;
