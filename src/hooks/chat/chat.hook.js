import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../socket/socket.hook.js";

export const useChat = () => {
  const messageDefault = {
    text: "Hello! How may I assist you today?",
    date: new Date().toISOString(),
    who: "AI",
  };

  const {
    states: { isOnline, responseMessage, statusResponse },
    socket,
  } = useSocket();

  const [waitResponse, setWaitResponse] = useState(false);
  const [messages, setMessages] = useState([messageDefault]);

  useEffect(() => {
    setWaitResponse(false);
  }, [responseMessage]);

  // When status is Success
  useEffect(() => {
    if (responseMessage.message) {
      setMessages(
        messages.concat([
          {
            text: responseMessage.message?.text ?? "",
            date: new Date().toISOString(),
            who: "AI",
          },
        ])
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseMessage]);

  /**
   * Send message t
   */
  const userPublicMessage = useCallback(
    (message) => {
      setMessages(
        messages.concat([
          {
            text: message,
            date: new Date().toISOString(),
            who: "USER",
          },
        ])
      );
    },
    [messages]
  );

  /**
   * Send message to IA with socket
   */
  const sendMessageToAI = useCallback(
    (message) => {
      setWaitResponse(true);

      const messagePayloadSocket = JSON.stringify({
        action: "sendMessage",
        message,
      });

      socket.send(messagePayloadSocket);
    },

    [socket]
  );

  return {
    states: {
      messages,
      isOnline,
      waitResponse,
      statusResponse,
      responseMessage,
    },
    methods: {
      sendMessageToAI,
      userPublicMessage,
    },
  };
};
