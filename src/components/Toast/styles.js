import styled from "styled-components";

export const Toast = styled.div`
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;

  &.success {
    background: #6ec56e;
  }
  &.warning {
    background: #ed991d;
  }
  &.error {
    background: #e14d45;
  }
  &.info {
    background: #3c90d1;
  }
`;
