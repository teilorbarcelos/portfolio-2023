import styled from "styled-components";

interface IconProps {
  themeState: string;
}

export const ThemeSwitcherContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  cursor: pointer;
`;

export const Switch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider:before {
    transform: translateX(26px);
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  outline: 2px solid ${(props) => props.theme.sliderBackgroundColor};

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: ${(props) => props.theme.sliderButtonColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    z-index: 1;
  }
`;

export const SunIcon = styled.span<IconProps>`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  background-image: url("/icons/sun-icon.svg");
  background-size: cover;
  opacity: ${({ themeState }) => (themeState === "dark" ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;

export const MoonIcon = styled.span<IconProps>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  background-image: url("/icons/moon-icon.svg");
  background-size: cover;
  opacity: ${({ themeState }) => (themeState === "light" ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;
