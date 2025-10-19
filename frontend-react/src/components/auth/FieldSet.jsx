const FieldSet = ({ heading, children }) => {
  return (
    <fieldset className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
      {heading && (
        <legend className="text-center font-semibold text-gray-500 text-lg mb-4">
          {heading}
        </legend>
      )}

      {children}
    </fieldset>
  );
};
export default FieldSet;
