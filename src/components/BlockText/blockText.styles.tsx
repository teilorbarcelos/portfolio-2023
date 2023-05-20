import styled from "styled-components";

export const BlockText = styled.div`
  margin-top: 16px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  p {
    color: ${(props) => props.theme.pTextColor};
  }

  a {
    color: ${(props) => props.theme.aLinksColor};
  }
`;
