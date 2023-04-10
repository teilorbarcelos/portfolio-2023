import styled from "styled-components";

export const SocialIconContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.socialIconContainerColor};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:hover {
    filter: drop-shadow(0 0 0.75rem #7fb8da);
  }
`;
