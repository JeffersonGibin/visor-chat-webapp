import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;

  background: #2c3e50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4ca1af,
    #2c3e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4ca1af,
    #2c3e50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 500px) {
    max-width: 300px;
  }
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

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #1d3444;
  }
`;
