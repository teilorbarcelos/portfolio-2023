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
`;

export const FirstBar = styled.div<AmburgerButtonProps>`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: 2px;
  border-radius: 1px;

  ${(props) =>
    props.isMenuOpen ? "transform: rotate(-45deg) translate(-5px, 6px);" : ""}
`;

export const CenterBar = styled.div<AmburgerButtonProps>`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: 2px;
  border-radius: 1px;

  ${(props) => (props.isMenuOpen ? "opacity: 0;" : "")}
`;

export const LastBar = styled.div<AmburgerButtonProps>`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: 2px;
  border-radius: 1px;

  ${(props) =>
    props.isMenuOpen ? "transform: rotate(45deg) translate(-5px, -6px);" : ""}
`;
