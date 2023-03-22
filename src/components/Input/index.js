import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, disabled, autoFocus, onChange, onKeyPress }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;
