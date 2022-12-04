import React, { memo } from "react";
import { Field } from "formik";
import { Label } from ".";

const Select = ({
  label,
  className,
  classNameLable,
  error,
  onChange,
  optionsList,
  emptyText,
  optionLabelKey,
  optionValueKey,
  classAddonOuter,
  addOnLable,
  ...props
}) => (
  <div className={`c-form-group ${classAddonOuter}`}>
    {label && <Label label={label} className={classNameLable} />}
    <Field
      component="select"
      className={`${className || "form-control"} ${error ? "is-invalid" : ""}`}
      onChange={onChange}
      {...props}
    >
      <option value="" disabled>
        {emptyText ?? "Select your option"}
      </option>
      {Array.isArray(optionsList) &&
        optionsList.map((item) => (
          <option
            value={item.value || (optionValueKey && item[optionValueKey])}
            key={`option-${
              item.value || (optionValueKey && item[optionValueKey])
            }-${item.id}`}
          >
            {item.label || (optionLabelKey && item[optionLabelKey])}
            {addOnLable && addOnLable}
          </option>
        ))}
    </Field>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default memo(Select);
