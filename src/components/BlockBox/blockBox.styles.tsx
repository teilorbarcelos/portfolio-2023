import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const BlockBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
`;

export const BlockBoxContent = styled.div`
  width: 100%;
  padding: ${rem(48)};
  max-width: ${rem(980)};
  border-radius: ${rem(8)};
  background: ${(props) => props.theme.boxesColor};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    margin-top: ${rem(24)};
  }

  @media screen and (max-width: 768px) {
    padding: ${rem(24)};
  }
`;
