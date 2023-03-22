import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export function SignInPage(e) {
  const { signIn } = useAuth();
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const delayRedirect = (res) => {
    if (res.status === "SUCCESS") {
      setTimeout(() => {
          navigateTo("/home");
      }, 1000);
    }
  };

 

  const handleLogin = async () => {
    if (!email | !password) {
      setMessage("All fields required!");
      setError(true);
      return;
    }

    setLoading(true);

    await signIn(email, password).then((res) => {
      delayRedirect(res);
      setLoading(false);
      setMessage(res.message);

      if(res.status !== "SUCCESS"){
        setError(true)
      }
    }).catch((e) => {

      setError(true)
      setLoading(false);
      setMessage(e.message);
    });  
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <C.Container>
      <C.Label>Welcome again :)</C.Label>
      {message && <Toast text={message} className={error ? "error" : "success"}/>}
      <C.Content>
        <Input
          type="email"
          placeholder="Your email here"
          autoFocus={true}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setMessage(""), setError(false)]}
        />
        <Input
          type="password"
          placeholder="Your password here"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setMessage(""), setError(false)]}
          onKeyPress={handleKeyPress}
        />
        <Button Text="Login" type="submit" onClick={handleLogin} isLoading={loading}/>
        <C.LabelSignup>
          Don't have an account?
          <C.Strong>
            <Link to="/sign-up">&nbsp;register now</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
}
