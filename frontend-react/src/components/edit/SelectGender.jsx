import Field from "../auth/Field";

const SelectGender = ({ children, error }) => {
  return (
    <Field label="Gender" htmlFor="gender" error={error}>
      {children}
      <p className="text-gray-500 text-xs mt-2">
        This won't be part of your public profile.
      </p>
    </Field>
  );
};
export default SelectGender;
