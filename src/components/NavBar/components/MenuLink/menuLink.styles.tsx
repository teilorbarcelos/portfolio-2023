import styled from "styled-components";

export const MenuLinkContainer = styled.li<{color: string}>`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 7px;

  &:hover {
    filter: brightness(1.5);
  }

  .title {
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${(props) => props.color};
  }
`;
