import React from "react";

const getChildId = (children) => {
  const child = React.Children.only(children);

  return child.props.id;
};

const Field = ({ label, htmlFor, error, children }) => {
  const id = label && (htmlFor || getChildId(children));

  return (
    <div className="mb-3">
      {label && <label htmlFor={id}> {label} </label>}
      <div className="relative">{children}</div>

      {!!error && (
        <p className="text-red-400 my-1 text-xs"> {error.message} </p>
      )}
    </div>
  );
};
export default Field;
