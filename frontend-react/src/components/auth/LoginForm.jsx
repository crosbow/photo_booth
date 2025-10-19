import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Field, FieldSet, Input, Saperator } from "../";
import { api } from "../../api";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleSignUp from "./GoogleSignUp";

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      email: location?.state?.email || "",
      password: location?.state?.password || "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = use(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const response = await api.post("/auth/login", formData);

      if (response.status <= 201) {
        const { user, accessToken, refreshToken } = response.data;

        loginUser(user, accessToken, refreshToken);
        navigate("/");
      } else {
        setError("root.random", {
          type: "random",
          message: "Failed to register",
        });
      }
      reset();
    } catch (error) {
      if (error.response) {
        setError("root.random", {
          type: "random",
          message: error.response?.data?.message || "Failed to register",
        });
      } else {
        setError("root.random", {
          type: "random",
          message: "Failed to register",
        });
      }
    } finally {
      setSubmitting(false);
    }
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
          <button disabled={submitting} type="submit" className="login-button">
            {submitting ? "submitting..." : "Log in"}
          </button>
        </Field>

        {errors.root?.random && (
          <p className="text-red-400 text-xs mt-2">
            {errors.root.random.message}
          </p>
        )}
      </form>

      <Saperator />

      <GoogleSignUp />
    </FieldSet>
  );
};
export default LoginForm;
