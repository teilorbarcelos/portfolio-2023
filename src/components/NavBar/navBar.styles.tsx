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

  @media screen and (max-width: 450px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
    border-radius: 0;
    background: ${(props) => props.theme.navBarMobileContainer};
    box-shadow: 0 0 0.4rem 0.2rem rgba(0, 0, 0, 0.05);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: unset;
    top: unset;

    transform: ${(props) =>
      props.isOpen ? "translate(0, 0)" : "translate(-100%, 0)"};
  }
`;
