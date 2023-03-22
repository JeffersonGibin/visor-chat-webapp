import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { useChat, useAuth } from "../../hooks";

export function HomePage() {
  const { getSession, logoff } = useAuth();
  const { isOnline, waitResponse, messageStatus, message, sendMessage } =
    useChat();

  const session = getSession();

  return (

    <C.Container>
      <C.Header>
        <C.ContentHeaderLeft>
          <C.ServerStatus>
            <C.CicleOnline status={isOnline} />
            <div>{isOnline ? "Online" : "Offiline"}</div>
          </C.ServerStatus>
        </C.ContentHeaderLeft>

        <C.ContentHeaderRight>
          <C.Welcome>
            <span>Hello, {session.name}</span>
          </C.Welcome>
          <C.Logout>
            <button onClick={() => logoff()}>Leave</button>
          </C.Logout>
        </C.ContentHeaderRight>
      </C.Header>

      <C.Display>
        {/* <C.MessageResponse>Olá</C.MessageResponse> */}
        <C.Message position={"left"}>
          <div>
            teste
            321 321 321 3 21 32 13 3 213 21 3 1312 Olá
          </div>
          <span>02:39</span>
        </C.Message>
        <C.Message position={"rith"}>
          <div>
            teste
          </div>
          <span>02:39</span>
        </C.Message>
      </C.Display>

      <C.Footer>
        <Input
          type="text"
          placeholder="Write your message"
          value={""}
          onChange={(e) => {}}
        />
        <Button Text="Send" onClick={() => {}} isLoading={waitResponse} />
      </C.Footer>
    </C.Container>
  );
}
