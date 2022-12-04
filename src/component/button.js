import React, { memo } from "react";

const Button = ({ buttonType, children, buttonMode, ...rest }) => {
  if (buttonMode === "button") {
    return (
      <button type={buttonType === "button" ? "button" : "submit"} {...rest}>
        {children}
      </button>
    );
  }
  const { className, classAddon, icon, title, href } = rest;
  return (
    <a
      href={href || "javascript:void(0)"}
      className={
        className || `c-button c-button--bg c-button--bg--pink ${classAddon}`
      }
      {...rest}
    >
      {icon && <i className={`c-icon ${icon}`} />}
      {title}
      {children}
    </a>
  );
};
export default memo(Button);
