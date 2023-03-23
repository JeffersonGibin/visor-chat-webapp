import styled from "styled-components";

export const ContainerField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Input = styled.input`
  outline: none;
  padding: 16px 0px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  border-width: 1px;
  text-indent: 20px;

  &.required {
    border: 1px solid #ff0000;
  }
`;

export const MessageError = styled.div`
  font-size: 12px;
  color: #ff0000;
  display: flex;
  width: 100%;
  margin-top: 5px;
`;
