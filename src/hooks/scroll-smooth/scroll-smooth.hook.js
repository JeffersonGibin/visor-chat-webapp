import { useCallback, useRef } from "react";

export const useScrollSmooth = () => {
  const messageRef = useRef();

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return {
    messageRef,
    scrollToBottom,
  };
};
