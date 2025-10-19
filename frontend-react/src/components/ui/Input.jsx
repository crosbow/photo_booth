import clsx from "clsx";

const Input = ({ type = "text", variant, className, isError, ...rest }) => {
  const variants = {
    formInput: "form-input",
  };
  return (
    <input
      type={type}
      className={clsx([
        variants[variant],
        className,
        isError && "ring ring-red-500 border-none",
      ])}
      placeholder="Phone number, username, or email"
      {...rest}
    />
  );
};
export default Input;
