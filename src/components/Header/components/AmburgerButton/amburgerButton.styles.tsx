import styled from "styled-components";
import { AmburgerButtonProps } from "@/components/Header/components/AmburgerButton/amburgerButton.interface";

export const AmburgerButtonContainer = styled.div<AmburgerButtonProps>`
  width: 30px;
  height: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 5px;
  gap: 6px;
  cursor: pointer;

  .first-bar,
  .center-bar,
  .last-bar {
    background-color: ${(props) => props.theme.singleAmburgerBarColor};
    width: 100%;
    height: 2px;
    border-radius: 1px;
  }

  .first-bar {
    ${(props) =>
      props.isMenuOpen ? "transform: rotate(-45deg) translate(-5px, 6px);" : ""}
  }

  .center-bar {
    ${(props) => (props.isMenuOpen ? "opacity: 0;" : "")}
  }

  .last-bar {
    ${(props) =>
      props.isMenuOpen ? "transform: rotate(45deg) translate(-5px, -6px);" : ""}
  }
`;
