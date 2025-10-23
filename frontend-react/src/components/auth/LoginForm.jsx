import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Input from "../ui/Input";
import Saperator from "../ui/Saperator";
import Field from "./Field";
import FieldSet from "./FieldSet";
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
      email: location?.state?.email || "mozexa@mailinator.com",
      password: location?.state?.password || "Pa$$w0rd!",
    },
  });
  const { loginUser } = use(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      await loginUser(formData.email, formData.password);

      navigate("/edit");
      reset();
    } catch (error) {
      // console.log(error);

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
            type={"password"}
            isError={!!errors.password}
            placeholder="Password"
          />
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
