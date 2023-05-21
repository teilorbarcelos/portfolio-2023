import styled from "styled-components";
import { NavBarProps } from "@/components/NavBar/navBar.interface";
import { rem } from "@/hooks/utils";

export const NavbarContainer = styled.nav<NavBarProps>`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.socialIconContainerColor};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
    padding: ${rem(18)} 0;
    border-radius: ${rem(6)};
    overflow: hidden;
    gap: ${rem(7)};
    z-index: 2;

    position: fixed;
    left: ${rem(16)};
    top: 50%;
    transform: ${(props) =>
      props.isOpen ? "translate(0, -50%)" : "translate(-140%, -50%)"};

    width: ${rem(72)};

    @media screen and (max-width: 450px) {
      flex-direction: row;
      justify-content: space-around;
      padding: ${rem(10)} 0;
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
  }
`;
