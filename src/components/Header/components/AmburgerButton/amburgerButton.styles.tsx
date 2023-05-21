import styled from "styled-components";
import { AmburgerButtonProps } from "@/components/Header/components/AmburgerButton/amburgerButton.interface";
import { rem } from "@/hooks/utils";

export const AmburgerButtonContainer = styled.div<AmburgerButtonProps>`
  width: ${rem(30)};
  height: ${rem(30)};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${rem(6)} ${rem(5)};
  gap: ${rem(6)};
  cursor: pointer;
`;

export const FirstBar = styled.div<AmburgerButtonProps>`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: ${rem(2)};
  border-radius: ${rem(1)};

  ${(props) =>
    props.isMenuOpen ? `transform: rotate(-45deg) translate(-${rem(5)}, ${rem(6)});` : ""}
`;

export const CenterBar = styled.div<AmburgerButtonProps>`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: ${rem(2)};
  border-radius: ${rem(1)};

  ${(props) => (props.isMenuOpen ? "opacity: 0;" : "")}
`;

export const LastBar = styled.div<AmburgerButtonProps>`
  background-color: ${(props) => props.theme.singleAmburgerBarColor};
  width: 100%;
  height: ${rem(2)};
  border-radius: ${rem(1)};

  ${(props) =>
    props.isMenuOpen
      ? `transform: rotate(45deg) translate(-${rem(5)}, -${rem(6)});`
      : ""}
`;
