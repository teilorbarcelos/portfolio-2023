import { AmburgerButton } from "./components/AmburgerButton";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import {
  TopBarCenter,
  TopBarContainer,
  TopBarLeft,
  TopBarRight,
} from "./topBar.styles";
import { LinkedinIcon } from "./components/SocialIcon/icons/linkedin";
import { GithubIcon } from "./components/SocialIcon/icons/github";
import { HireMeButton } from "./components/HireMeButton";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export function TopBar() {
  return (
    <TopBarContainer data-testid="top-bar">
      <TopBarLeft>
        <AmburgerButton />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </TopBarLeft>

      <TopBarCenter>
        <GithubIcon />
        <LinkedinIcon />
      </TopBarCenter>

      <TopBarRight>
        <HireMeButton />
      </TopBarRight>
    </TopBarContainer>
  );
}
