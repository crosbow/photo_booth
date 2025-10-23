import Field from "../auth/Field";

const WebsiteSection = ({ children, error }) => {
  return (
    <Field label="Website" htmlFor="website" error={error}>
      {children}
      <p className="text-gray-500 text-xs">
        Editing your links is only available on mobile. Visit the PhotoBooth app
        and edit your profile to change the websites in your bio.
      </p>
    </Field>
  );
};
export default WebsiteSection;
