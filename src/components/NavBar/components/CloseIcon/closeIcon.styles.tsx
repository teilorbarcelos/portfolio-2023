import styled from "styled-components";

export const CloseIconContainer = styled.div`
  margin-top: 17px;
  cursor: pointer;
  filter: brightness(.5);

  &:hover {
    filter: brightness(1.5);
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
