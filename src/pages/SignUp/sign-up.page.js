import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAccount } from "../../hooks";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import { useForm } from "react-hook-form";
import * as C from "./styles";

export function SignUpPage() {
  const navigateTo = useNavigate();
  const { signUp } = useUserAccount();
  const [loading, setLoading] = useState(false);
  const [responseServer, setResponseServer] = useState({
    message: "",
    status: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const validations = {
    name: {
      required: "Field is required",
      minLength: {
        value: 3,
        message: "Please enter a minimum of 3 characters",
      },
    },
    email: {
      required: "Field is required",
    },
    password: {
      required: "Field is required",
      minLength: {
        value: 6,
        message: "Please enter a minimum of 6 characters",
      },
      pattern: {
        value: /^(?=.*[a-z])[a-z0-9]{6,}$/i,
        message:
          "Please, your password needs to consist of letters and numbers",
      },
    },
  };

  // When serverResponse exist effect a setTimeout to hide message
  useEffect(() => {
    if (responseServer.message) {
      setTimeout(() => {
        setResponseServer({
          message: "",
          status: "",
        });
      }, 4000);
    }
  }, [responseServer]);

  const onSubmit = async (data) => {
    setLoading(true);

    await signUp(data.name, data.email, data.password)
      .then((res) => {
        setLoading(false);

        if (res.status === "SUCCESS") {
          setResponseServer({
            status: "SUCCESS",
            message:
              "User successfully created, you are being redirected login....",
          });

          setTimeout(() => {
            navigateTo("/sign-in");
          }, 2000);
        } else {
          setResponseServer({
            status: res.status,
            message: res.message,
          });
        }
      })
      .catch((e) => {
        setLoading(false);
        setResponseServer({
          status: "SERVER_ERROR",
          message: "We are offline, please try again later!",
        });
      });

    reset();
  };

  return (
    <C.Container>
      <C.Label>Register now is free :)</C.Label>
      {responseServer.status === "SUCCESS" && (
        <Toast text={responseServer.message} className={"success"} />
      )}
      {responseServer.status !== "SUCCESS" && (
        <Toast text={responseServer.message} className={"warning"} />
      )}
      {responseServer.status === "SERVER_ERROR" && (
        <Toast text={responseServer.message} className={"error"} />
      )}

      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="name"
          autoFocus={true}
          errors={errors}
          placeholder="Your name is here"
          validationSchema={validations}
          register={register}
        />

        <Input
          type="email"
          name="email"
          errors={errors}
          placeholder="Your email is here"
          validationSchema={validations}
          register={register}
        />

        <Input
          type="password"
          name="password"
          placeholder="Your password is here"
          errors={errors}
          validationSchema={validations}
          register={register}
        />

        <Button
          Text="Create Account"
          type="submit"
          register={register}
          isLoading={loading}
        />
        <C.LabelSignup>
          Already have an account?
          <C.Strong>
            <Link to="/sign-in">&nbsp;login now</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Form>
    </C.Container>
  );
}
