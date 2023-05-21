import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const MenuLinkContainer = styled.li<{ color: string }>`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(4)};
  padding: ${rem(7)};
  -webkit-transition: unset;
  transition: unset;

  &:hover {
    filter: brightness(1.5);
  }

  .title {
    font-size: ${rem(11)};
    line-height: ${rem(16)};
    text-transform: uppercase;
    color: ${(props) => props.color};
  }
`;
