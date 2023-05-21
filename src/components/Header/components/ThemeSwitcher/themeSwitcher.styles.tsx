import styled from "styled-components";
import { rem } from "@/hooks/utils";

interface IconProps {
  themeState: string;
}

export const ThemeSwitcherContainer = styled.label`
  position: relative;
  display: inline-block;
  width: ${rem(50)};
  height: ${rem(24)};
  cursor: pointer;
`;

export const Switch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider:before {
    transform: translateX(${rem(26)});
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border-radius: ${rem(34)};
  outline: ${rem(2)} solid ${(props) => props.theme.sliderBackgroundColor};

  &:before {
    position: absolute;
    content: "";
    height: ${rem(20)};
    width: ${rem(20)};
    left: ${rem(2)};
    bottom: ${rem(2)};
    background-color: ${(props) => props.theme.sliderButtonColor};
    border-radius: 50%;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    z-index: 1;
  }
`;

export const SunIcon = styled.span<IconProps>`
  position: absolute;
  top: ${rem(4)};
  right: ${rem(4)};
  width: ${rem(16)};
  height: ${rem(16)};
  background-image: url("/icons/sun-icon.svg");
  background-size: cover;
  opacity: ${({ themeState }) => (themeState === "dark" ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;

export const MoonIcon = styled.span<IconProps>`
  position: absolute;
  top: ${rem(4)};
  left: ${rem(4)};
  width: ${rem(16)};
  height: ${rem(16)};
  background-image: url("/icons/moon-icon.svg");
  background-size: cover;
  opacity: ${({ themeState }) => (themeState === "light" ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;
