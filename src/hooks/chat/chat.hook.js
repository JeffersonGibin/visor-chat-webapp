import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../context-provider/context/auth.context.js";

export const useChat = () => {
  const [isOnlineSocket, setServerStatus] = useState(false);
  const [waitResponseSocket, setWaitResponse] = useState(false);
  const [statusResponseSocket, setStatusResponse] = useState("");
  const [responseMessageAISocket, setResponseMessageAI] = useState("");

  const context = useContext(AuthContext);
  const socket = context.socket;

  /**
   * Server Open
   */
  socket.addEventListener("open", (event) => {
    setServerStatus(true);
  });

  socket.addEventListener("close", (event) => {
    setWaitResponse(false);
      setStatusResponse("The connection is closed!");
  })

  /**
   * Listen Messages
   */
  socket.addEventListener("message", (event) => {
    const response = JSON.parse(event.data);
    console.log(response);

    if (!response?.status) {
      setWaitResponse(false);
      setStatusResponse("Error");
    }

    if (response.status === "Success") {
      setStatusResponse(response.status);
      setWaitResponse(false);
      setResponseMessageAI(response);
    } else {
      setStatusResponse("Error");
    }
  });

  /**
   * Send message to IA with socket
   */
  const sendMesseToAI = useCallback(
    (message) => {
      setWaitResponse(true);

      const payload = JSON.stringify({
        action: "sendMessage",
        message,
      });
      context.socket.send(payload);
    },
    [context.socket]
  );

  return {
    sendMesseToAI,
    isOnlineSocket,
    waitResponseSocket,
    statusResponseSocket,
    responseMessageAISocket,
  };
};
