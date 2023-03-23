import React, { useRef, useEffect, useState } from "react";
import { getTime } from "./time.js";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Toast from "../../components/Toast";

import * as C from "./styles.js";
import { useChat, useAuth } from "../../hooks";
import { useForm } from "react-hook-form";

export function HomePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const messageRef = useRef();
  const { getSession, logoff } = useAuth();
  const [error, setError] = useState("");
  const [messages, setMessageInList] = useState([
    {
      text: "Hello! How may I assist you today?",
      date: new Date().toISOString(),
      who: "AI",
    },
  ]);

  const {
    isOnlineSocket,
    waitResponseSocket,
    sendMesseToAI,
    statusResponseSocket,
    responseMessageAISocket,
  } = useChat();

  const validations = {
    required: "Field is required",
    minLength: {
      value: 3,
      message: "Please enter a minimum of 3 characters",
    },
  };

  const session = getSession();

  const scrollToBottom = () => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // When status is Success
  useEffect(() => {
    if (responseMessageAISocket) {
      setMessageInList(
        messages.concat([
          {
            text: responseMessageAISocket.message?.text ?? "",
            date: new Date().toISOString(),
            who: "AI",
          },
        ])
      );

      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseMessageAISocket]);

  // When status is error
  useEffect(() => {
    if (statusResponseSocket === "Error") {
      setError("The server is loaded. try again!");
    }

    setTimeout(() => {
      setError("");
    }, 2000);
  }, [statusResponseSocket]);

  const onSubmit = async (data) => {
    // print message user
    if (data.message) {
      setMessageInList(
        messages.concat([
          {
            text: data.message,
            date: new Date().toISOString(),
            who: "USER",
          },
        ])
      );
    }

    sendMesseToAI(data.message);

    // reset field
    reset();
  };

  return (
    <C.Container>
      <C.Header>
        <C.ContentHeaderLeft>
          <C.ServerStatus>
            <C.CicleOnline status={isOnlineSocket} />
            <div>{isOnlineSocket ? "Online" : "Offiline"}</div>
          </C.ServerStatus>
        </C.ContentHeaderLeft>

        <C.ContentHeaderRight>
          <C.Welcome>
            <span>Hello, {session?.name}</span>
          </C.Welcome>
          <C.Logoff>
            <button onClick={() => logoff()}>Log out</button>
          </C.Logoff>
        </C.ContentHeaderRight>
      </C.Header>

      <C.Display>
        {messages.map((item, index) => (
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
            isLoading={waitResponseSocket}
            disabled={!isOnlineSocket}
          />
        </C.Form>
      </C.Footer>
    </C.Container>
  );
}
