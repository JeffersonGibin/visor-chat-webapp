import React from "react";
import * as C from "./styles";

const Toast = ({ text, error, className}) => {
  const classNameValiation = text.length > 0 ? className : "";
  
  return (
    <C.Toast error={error} className={classNameValiation}>
      <span>{text}</span>
    </C.Toast>
  );
};

export default Toast;
