import clsx from "clsx";
import React from "react";

const getChildId = (children) => {
  const child = React.Children.only(children);

  return child.props.id;
};

const Field = ({ label, htmlFor, className, error, children }) => {
  const id = label && (htmlFor || getChildId(children));

  return (
    <div className={clsx(["mb-3", className])}>
      {label && (
        <label htmlFor={id} className="text-sm mb-6">
          {label}
        </label>
      )}
      <div className="relative">{children}</div>

      {!!error && (
        <p className="text-red-400 my-1 text-xs"> {error?.message || error} </p>
      )}
    </div>
  );
};
export default Field;
