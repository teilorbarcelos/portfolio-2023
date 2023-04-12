import {
  AmburgerButton,
  ThemeSwitcher,
  HireMeButton,
  LanguageSwitcher,
} from "@/components/Header/components";
import {
  MobileRightContainer,
  HeaderCenter,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
} from "@/components/Header/header.styles";
import { GitHub } from "@/components/Header/components/SocialIcon/GitHub";
import { Linkedin } from "@/components/Header/components/SocialIcon/Linkedin";

export const Header = () => {
  return (
    <HeaderContainer data-testid="top-bar">
      <HeaderLeft>
        <AmburgerButton />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </HeaderLeft>

      <HeaderCenter>
        <GitHub />
        <Linkedin />
      </HeaderCenter>

      <HeaderRight>
        <HireMeButton />
        <MobileRightContainer>
          <GitHub />
          <Linkedin />
        </MobileRightContainer>
      </HeaderRight>
    </HeaderContainer>
  );
};
