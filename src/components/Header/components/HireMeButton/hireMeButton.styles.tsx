import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const HireMeButtonContainer = styled.button`
  height: ${rem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rem(11)} ${rem(21)};
  border-radius: ${rem(20)};
  color: white;
  font-family: Inter, sans-serif;
  font-size: ${rem(14)};
  line-height: ${rem(21)};
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
