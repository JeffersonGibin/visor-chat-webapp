import React, { useEffect, useState } from "react";
import { getTime } from "./time.js";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Toast from "../../components/Toast";

import * as C from "./styles.js";
import { useChat, useAuth, useScrollSmooth } from "../../hooks";
import { useForm } from "react-hook-form";

export function HomePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { methods, states } = useChat();
  const [error, setError] = useState("");
  const { getSession, logoff } = useAuth();
  const { messageRef, scrollToBottom } = useScrollSmooth();

  // When status is error
  useEffect(() => {
    if (states.responseMessage.status === "Error") {
      setError("The server is loaded. try again!");
    }

    setTimeout(() => {
      setError("");
    }, 2000);
  }, [states.responseMessage.status]);

  // When response effect then scrollToBottom
  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, states.waitResponse]);

  const validations = {
    required: "Field is required",
    minLength: {
      value: 3,
      message: "Please enter a minimum of 3 characters",
    },
  };

  const onSubmit = async (data) => {
    reset();

    if (!data.message) {
      data.preventDefault();
    }

    methods.userPublicMessage(data.message);
    methods.sendMessageToAI(data.message);
  };

  return (
    <C.Container>
      <C.Header>
        <C.ContentHeaderLeft>
          <C.ServerStatus>
            <C.CicleOnline status={states.isOnline} />
            <div>{states.isOnline ? "Online" : "Offiline"}</div>
          </C.ServerStatus>
        </C.ContentHeaderLeft>

        <C.ContentHeaderRight>
          <C.Welcome>
            <span>Hello, {getSession()?.name}</span>
          </C.Welcome>
          <C.Logoff>
            <button onClick={() => {
              methods.disconnect();
              logoff();
            }}>Log out</button>
          </C.Logoff>
        </C.ContentHeaderRight>
      </C.Header>

      <C.Display>
        {states.messages.map((item, index) => (
          <C.Message
            ref={messageRef}
            key={index}
            position={item.who === "AI" ? "left" : "right"}
          >
            <div>{item.text}</div>
            <span>{getTime(item.date)}</span>
          </C.Message>
        ))}
      </C.Display>

      {error && <Toast text={error} className="error" />}

      <C.Footer>
        <C.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="message"
            placeholder="Write your message"
            errors={errors}
            autoFocus={true}
            validationSchema={validations}
            register={register}
          />

          <Button
            Text="Send"
            type="submit"
            isLoading={states.waitResponse}
            disabled={!states.isOnline}
          />
        </C.Form>
      </C.Footer>
    </C.Container>
  );
}
