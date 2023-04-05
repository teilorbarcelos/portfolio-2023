import styled from "styled-components";

export const AmburgerButtonContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 5px;
  gap: 6px;
`;

export const SingleAmburgerBar = styled.div`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: 2px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1px;
`;
