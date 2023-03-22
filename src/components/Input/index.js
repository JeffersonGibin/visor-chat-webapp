import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, autoFocus, onChange }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
