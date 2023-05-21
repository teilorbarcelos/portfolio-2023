import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const PageHeaderContainer = styled.section`
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};

  .content {
    width: 100%;
    max-width: ${rem(980)};
    margin-top: ${rem(80)};
    padding: 0 ${rem(48)} ${rem(48)};
    border-radius: ${rem(8)};
    background: ${(props) => props.theme.boxesColor};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;

    .profile-image {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      border: ${rem(8)} solid ${(props) => props.theme.boxesColor};
      border-radius: 50%;
    }

    .profile-name {
      margin-top: ${rem(90)};
    }

    .header-text {
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
    }

    .button {
      margin-top: ${rem(24)};
    }

    @media screen and (max-width: 768px) {
    padding: 0 ${rem(16)} ${rem(36)};
    }
  }
`;
