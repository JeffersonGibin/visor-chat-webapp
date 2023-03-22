import React, { useEffect, useState } from "react";
import { getTime } from "./time.js";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Toast from "../../components/Toast";

import * as C from "./styles.js";
import { useChat, useAuth } from "../../hooks";

export function HomePage() {
  const [text, setText] = useState("");
  const { getSession, logoff } = useAuth();
  const [error, setError] = useState("");
  const [messages, setMessageInList] = useState([]);

  const {
    isOnlineSocket,
    waitResponseSocket,
    responseMessageAISocket,
    sendMesseToAI,
    statusResponseSocket,
  } = useChat();
  const session = getSession();

  // Effect When message is change
  useEffect(() => {
    if (responseMessageAISocket) {
      setMessageInList(
        messages.concat([
          {
            text:
              responseMessageAISocket.message.text ??
              "I am not response now. =/",
            date: new Date().toISOString(),
            who: "AI",
          },
        ])
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseMessageAISocket]);

  // When status is error
  useEffect(() => {
    if (statusResponseSocket === "Error") {
      setError("The server is loaded. try again!");
      setTimeout(() => {setError("")}, 4000);
    }

  }, [statusResponseSocket]);

  useEffect(() => {
    window.scrollTo(document.body.scrollHeight, 0);
  }, [messages]);

  // Send Message
  const sendMessage = () => {

    setText(""); // Clear field
    sendMesseToAI(text);
    setMessageInList(
      messages.concat([
        {
          text,
          date: new Date().toISOString(),
          who: "USER",
        },
      ])
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
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
            <span>Hello, {session.name}</span>
          </C.Welcome>
          <C.Logout>
            <button onClick={() => logoff()}>Log out</button>
          </C.Logout>
        </C.ContentHeaderRight>
      </C.Header>

      <C.Display>
        {messages.map((item, index) => (
          <C.Message
            key={index}
            position={item.who === "AI" ? "left" : "right"}
          >
            <div>{item.text}</div>
            <span>{getTime(item.date)}</span>
          </C.Message>
        ))}
      </C.Display>

      {error && <Toast text={error  } className="error" />}

      <C.Footer>
        <Input
          type="text"
          placeholder="Write your message"
          value={text}
          autoFocus={true}
          // disabled={!isOnline}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          Text="Send"
          onClick={sendMessage}
          isLoading={waitResponseSocket}
          disabled={!isOnlineSocket}
        />
      </C.Footer>
    </C.Container>
  );
}
