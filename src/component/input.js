import React, { memo } from "react";
import { Field } from "formik";
import { Label } from ".";

const Input = ({
  label,
  className,
  classNameLable,
  error,
  onChange,
  classAddonOuter,
  ...props
}) => (
  <div className={`c-form-group ${classAddonOuter}`}>
    {label && <Label label={label} className={classNameLable} />}
    <Field
      className={`${className || "form-control"} ${error ? "is-invalid" : ""}`}
      onChange={onChange}
      {...props}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default memo(Input);
