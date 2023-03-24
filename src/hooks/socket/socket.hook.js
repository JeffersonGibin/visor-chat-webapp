import { useContext, useState } from "react";
import { AuthContext } from "../../context-provider/context/auth.context.js";

export const useSocket = () => {
  const context = useContext(AuthContext);
  const socket = context.socket;

  const [isOnline, setServerStatus] = useState(false);
  const [statusResponse, setStatusResponse] = useState("");
  const [responseMessage, setResponseMessage] = useState({});

  /**
   * Server Open
   */
  socket.addEventListener("open", (event) => {
    setServerStatus(true);
  });

  socket.addEventListener("close", (event) => {
    setServerStatus(false);
  });

  /**
   * Listen Messages
   */
  socket.addEventListener("message", (event) => {
    const response = JSON.parse(event.data);

    if (!response?.status || response.status !== "Success") {
      setStatusResponse("Error");
    }

    if (response.status === "Success") {
      setStatusResponse(response.status);
      setResponseMessage(response);
    }
  });

  return {
    states: {
      isOnline,
      statusResponse,
      responseMessage,
    },
    socket,
  };
};
