import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const BlockText = styled.div`
  margin-top: ${rem(16)};
  text-align: center;
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};

  p {
    color: ${(props) => props.theme.pTextColor};
  }

  a {
    color: ${(props) => props.theme.aLinksColor};
  }
`;
