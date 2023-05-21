import { colorVariables } from "@/styles/theme.constants";
import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  font-weight: bold;
  border-radius: ${rem(4)};
  padding: ${rem(12)} ${rem(25)};
  font-size: ${rem(16)};
  border-radius: ${rem(32)};
  border: none;
  background: ${colorVariables.COLOR014};
  color: ${colorVariables.COLOR007};

  &:hover {
    filter: brightness(1.2);
  }
`;
