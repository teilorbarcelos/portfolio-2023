import { rem } from "@/hooks/utils";
import styled from "styled-components";

export const ClientsBoxClientImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${rem(16)};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(48)};
  padding: ${rem(24)} ${rem(62)};

  @media screen and (max-width: 768px) {
    padding: ${rem(24)} ${rem(0)};
  }
`;

export const ClientsBoxClientImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.clientIconColor};
  border-radius: ${rem(6)};
  background: ${(props) => props.theme.clientIconContainerColor};

  padding: ${rem(16)} ${rem(0)};
`;
