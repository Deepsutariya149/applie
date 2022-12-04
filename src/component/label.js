import React, { memo } from "react";

const Label = ({ label, className, ...props }) => (
  <span className={`${className || "form-lable"}`} {...props}>
    {label}
  </span>
);

export default memo(Label);
