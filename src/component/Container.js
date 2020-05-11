import "./Container.css";
import React from "react";
import clsx from "clsx";

export default ({ className, wrapperClassName, children }) => {
  return (
    <div className={clsx("container-wrapper", wrapperClassName)}>
      <div className={clsx("container", className)}>{children}</div>
    </div>
  );
};
