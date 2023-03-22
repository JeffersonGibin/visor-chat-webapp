import React from "react";
import * as C from "./styles";
import SpinnerIcon from "../SpinnerIcon/";

const Button = ({ Text, onClick, Type = "button", disabled, isLoading }) => {
  return (
    <C.Button type={Type} onClick={onClick} disabled={disabled}>
      {isLoading ? <SpinnerIcon/> : <C.Text>{Text}</C.Text>}
    </C.Button>
  );
};

export default Button;
