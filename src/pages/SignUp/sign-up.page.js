import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useUserAccount } from "../../hooks";
import Toast from "../../components/Toast";

export function SignUpPage() {
  const { signUp } = useUserAccount();
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const delayRedirect = (res) => {
    if (res.status === "SUCCESS") {
      setTimeout(() => {
          navigateTo("/sign-in");
      }, 1000);
    }
  };

  const handleCreateAccount = async () => {
    if (!name || !email | !password) {
      setMessage("All fields required!");
      setError(true);
      return;
    }

    setLoading(true);

    await signUp(name, email, password)
      .then((res) => {
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
      handleCreateAccount();
    }
  };

  return (
    <C.Container>
      <C.Label>Register now is free :)</C.Label>
      {message && <Toast text={message} className={error ? "error" : "success"}/>}
      <C.Content>
        <Input
          type="text"
          placeholder="Your name here"
          value={name}
          autoFocus={true}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          Text="Create Account"
          onClick={handleCreateAccount}
          isLoading={loading}
        />
        <C.LabelSignup>
          Already have an account?
          <C.Strong>
            <Link to="/sign-in">&nbsp;login now</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
}
