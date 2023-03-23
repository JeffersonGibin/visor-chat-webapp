import React from "react";
import * as C from "./styles";
import SpinnerIcon from "../SpinnerIcon/";

const Button = ({ Text, onClick, type, disabled, isLoading}) => {
  
  return (
    <C.Button type={type}  >
      {isLoading ? <SpinnerIcon/> : <C.Text>{Text}</C.Text>}
    </C.Button>
  );
};

export default Button;
