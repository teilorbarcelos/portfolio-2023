import { rem } from "@/hooks/utils";
import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
    font-size: ${rem(18)};
    color: ${(props) => props.theme.titlesColor};

    margin-top: ${rem(16)};
  }

  p {
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    color: ${(props) => props.theme.pTextColor};

    margin-top: ${rem(8)};
  }

  span {
    a {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.aLinksColor};
        font-weight: bold;

        margin-top: ${rem(6)};
    }
  }
`;
