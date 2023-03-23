import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { useForm } from "react-hook-form";

export function SignInPage(e) {
  const { signIn } = useAuth();
  const navigateTo = useNavigate();
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
  } = useForm();

  const validations = {
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
      }, 3000);
    }
  }, [responseServer]);

  const onSubmit = async (data) => {
    setLoading(true);

    await signIn(data.email, data.password)
      .then((res) => {
        setLoading(false);

        if (res.status === "SUCCESS") {
          setResponseServer({
            status: "SUCCESS",
            message: "Login successfully, you are being redirected...",
          });

          setTimeout(() => {
            navigateTo("/home");
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
          message: "We are offline, please try again later",
        });
      });

    reset();
  };

  return (
    <C.Container>
      <C.Label>Welcome again :)</C.Label>
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
          type="email"
          name="email"
          autoFocus={true}
          errors={errors}
          placeholder="Your name is here"
          validationSchema={validations}
          register={register}
        />

        <Input
          type="password"
          name="password"
          placeholder="Your name is here"
          errors={errors}
          validationSchema={validations}
          register={register}
        />

        <Button
          Text="Login"
          type="submit"
          register={register}
          isLoading={loading}
        />

        <C.LabelSignup>
          Don't have an account?
          <C.Strong>
            <Link to="/sign-up">&nbsp;register now</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Form>
    </C.Container>
  );
}
