import {
  AmburgerButton,
  ThemeSwitcher,
  HireMeButton,
  LanguageSwitcher,
} from "@/components/TopBar/components";
import {
  TopBarCenter,
  TopBarContainer,
  TopBarLeft,
  TopBarRight,
} from "@/components/TopBar/topBar.styles";
import { GitHub } from "@/components/TopBar/components/SocialIcon/GitHub";
import { Linkedin } from "@/components/TopBar/components/SocialIcon/Linkedin";

export const TopBar = () => {
  return (
    <TopBarContainer data-testid="top-bar">
      <TopBarLeft>
        <AmburgerButton />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </TopBarLeft>

      <TopBarCenter>
        <GitHub />
        <Linkedin />
      </TopBarCenter>

      <TopBarRight>
        <HireMeButton />
      </TopBarRight>
    </TopBarContainer>
  );
};
