import React from "react";
import * as C from "./styles";
import SpinnerIcon from "../SpinnerIcon/";

const Button = ({ Text, onClick, Type = "button", isLoading }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {isLoading ? <SpinnerIcon/> : <C.Text>{Text}</C.Text>}
    </C.Button>
  );
};

export default Button;
