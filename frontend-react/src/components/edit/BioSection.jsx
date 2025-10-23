import Field from "../auth/Field";

const BioSection = ({ children, maxLen, error }) => {
  return (
    <Field label="Bio" htmlFor="bio" error={error}>
      {children}
      <div className="flex justify-end">
        <span className="text-gray-500 text-xs">23 / {maxLen}</span>
      </div>
    </Field>
  );
};
export default BioSection;
