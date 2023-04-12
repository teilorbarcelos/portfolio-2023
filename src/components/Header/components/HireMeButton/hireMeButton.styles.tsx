import styled from "styled-components";

export const HireMeButtonContainer = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 21px;
  border-radius: 20px;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  background-color: #fe655c;
  border: none;
  cursor: pointer;

  a {
    color: white;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(1.4);
  }
`;
