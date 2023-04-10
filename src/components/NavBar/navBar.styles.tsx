import styled from "styled-components";
import { NavBarProps } from "@/components/NavBar/navBar.interface";

export const NavbarContainer = styled.nav<NavBarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.socialIconContainerColor};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
  padding: 27px 0;
  border-radius: 6px;
  overflow: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  position: absolute;
  left: 16px;
  top: 50%;
  transform: ${(props) =>
    props.isOpen ? "translate(0, -50%)" : "translate(-140%, -50%)"};

  width: 72px;
`;
