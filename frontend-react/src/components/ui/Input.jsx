import clsx from "clsx";
import { useState } from "react";

const Input = ({ type = "text", className, placeholder, isError, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  if (isPassword) {
    type = showPassword ? "text" : "password";
  }

  return (
    <>
      <input
        type={type}
        className={clsx([
          "form-input",
          className,
          isError && "ring ring-red-500 border-none",
        ])}
        placeholder={placeholder || "Enter here"}
        {...rest}
      />
      {isPassword && (
        <button
          onClick={() => setShowPassword((prev) => !prev)}
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </>
  );
};
export default Input;
