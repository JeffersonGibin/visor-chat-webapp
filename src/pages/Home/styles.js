import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #f4f6f6;
`;

export const ServerStatus = styled.div`
  display: flex;

  & div {
    margin-left: 7px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const CicleOnline = styled.div`
  background: ${(props) => (props.status ? "#6ec56e" : "#c95d5d")};
  width: 12px;
  height: 12px;
  border-radius: 30px;
`;

export const Header = styled.div`
  gap: 15px;
  display: flex;
  width: 100%;
  box-shadow: 0 1px 3px #0003;
  max-width: 1024px;
  border-radius: 5px 5px 0px 0px;
  height: 100px;
  background: #1d3345;
`;

export const Welcome = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
`;
export const Logout = styled.div`
  margin-right: 20px;

  & button {
    color: #ffffff;
    border-radius: 5px;
    border: none;
    background: #c56e6e;
    font-size: 12px;
    padding: 5px;
    margin-right: 20px;
    min-width: 52px;
    text-decoration: underline white;
  }

  & a {
    color: #fff;
  }
`;

export const ContentHeaderLeft = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
`;
export const ContentHeaderRight = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  margin-left: 20px;
`;

export const MessageResponse = styled.div`
  align-self: flex-start;
  background: #f3f6f6;
  padding: 10px 40px;
  border-radius: 15px 15px 15px 0px;
  margin-left: 10px;
  font-size: 15px;
  color: #1d3345;
  max-width: 500px;
  text-align: left;
`;
export const Message = styled.div`
  margin: 10px;
  display: flex;
  font-size: 15px;
  max-width: 500px;

  align-self: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};

  background: ${(props) => (props.position === "left" ? "#f3f6f6" : "#5e8c8c")};

  padding: ${(props) => (props.position === "left" ? "10px 40px" : "10px")};

  border-radius: ${(props) =>
    props.position === "left" ? "25px 15px 20px 0px" : "15px 25px 0px 20px"};
  color: ${(props) => (props.position === "left" ? "#1d3345" : "#ffffff")};

  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  & div {
    word-wrap: break-word;
    width: 13em;
    word-wrap: break-word;
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & span {
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  max-width: 1024px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 15px;

  & button {
    width: 115px;
    height: 60px;
  }

  & input {
    outline: none;
    padding: 16px 0px;
    width: 100%;
    border-radius: 5px;
    border-width: 1px;
    text-indent: 22px;
    margin-right: 10px;
    height: 25px;
  }
`;

export const Display = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 3px #0003;
  background-color: #fff;
  max-width: 1024px;
  overflow-y: auto;
  min-height: 590px;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: none;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 3px #0003;
  background-color: #fff;
  max-width: 1024px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 25px;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #1d3444;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #1d3444;
  }
`;
