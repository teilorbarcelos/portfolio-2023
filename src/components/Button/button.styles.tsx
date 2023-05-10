import { colorVariables } from "@/styles/theme.constants";
import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  border-radius: 4px;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 32px;
  border: none;
  background: ${colorVariables.COLOR014};
  color: ${colorVariables.COLOR007};

  &:hover {
    filter: brightness(1.2);
  }
`;
