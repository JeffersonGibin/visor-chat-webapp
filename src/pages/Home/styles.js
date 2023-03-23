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
  max-width: 1024px;
  border-radius: 5px 5px 0px 0px;
  max-height: 125px;
  height: 100%;
  background: rgb(29, 51, 69);
  margin-top: 10px;
  background: #2c3e50;
  background: -webkit-linear-gradient(to right, #4ca1af, #2c3e50);
  background: linear-gradient(to right, #4ca1af, #4ca1af);

  @media (max-width: 880px) {
    margin-top: 0px;
    max-height: 100px;
  }
`;

export const Welcome = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
`;
export const Logoff = styled.div`
  margin-right: 20px;
  
  & button {
    
    cursor: pointer;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    background: #508b95;
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

  background: ${(props) => (props.position === "left" ? "#f3f6f6" : "#e7f6f6")};

  padding: ${(props) => (props.position === "left" ? "10px 40px" : "10px")};

  border-radius: ${(props) =>
    props.position === "left" ? "25px 15px 20px 0px" : "15px 25px 0px 20px"};
  color: ${(props) => (props.position === "left" ? "#1d3345" : "#1d3345")};
  border: 1px solid
    ${(props) => (props.position === "left" ? "#CCC" : "#69bcca")};

  /** fade-in message */
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
    color: ${(props) => (props.position === "left" ? "#1d3345" : "#1d3345")};
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
  background-color: #fff;
  border: 1px solid #ccc;
  padding-top: 25px;
  padding-bottom: 25px;


  @media (max-width: 880px) {
    padding-top: 20px;
    margin-bottom: 0px;
    border-bottom: none;
  }
`;


export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;


  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px
  }

  & .container-field {
    max-width: 700px;
    min-width: 200px;

    @media (max-width: 880px) {
      align-items: center;
    }
    
  }

  & .container-field > input {
    outline: none;
    padding: 16px 0px;
    width: 100%;
    border-radius: 32px;
    border-width: 1px;
    text-indent: 22px;
    height: 25px;
    border: 1px solid #aaa;
    border-radius: 8px 0px 0px 8px;
    border-right: none;

    @media (max-width: 880px) {
      border: none;
    }
  }

  & button {
    width: 125px;
    height: 59px;
    border-radius: 0px 8px 8px 0px;
    background-color: #4ca1af;
    border: 5px solid #4ca1af;
    color: #fff;

    @media (max-width: 880px) {
      display: flex;
      width: 100%;
      justify-content: center;
      border-radius: 5px;
      max-width: 750px;
    }
  }
`

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

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #1d3444;
`;
