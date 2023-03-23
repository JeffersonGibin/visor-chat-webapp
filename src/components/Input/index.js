import React, { Fragment } from "react";
import * as C from "./styles";

const Input = (props) => {

  const validation = props.validationSchema[props.name];

  console.log(validation);


  return (
    <Fragment>
      <C.ContainerField>
        <C.Input
          id={props.name}
          name={props.name}
          type={props.type}
          className={props.errors && props.errors[props.name]?.message ? "required" : ""}
          {...props?.register && {...props.register(props.name, validation)}}
          {...props}
        />

        {props.errors && (
          <C.MessageError className="error">
            {props.errors[props.name]?.message}
          </C.MessageError>
        )}
      </C.ContainerField>
    </Fragment>
  );
};

export default Input;
