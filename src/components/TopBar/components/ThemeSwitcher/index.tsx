import {
  MoonIcon,
  Slider,
  SunIcon,
  Switch,
  ThemeSwitcherContainer,
} from "@/components/TopBar/components/ThemeSwitcher/themeSwitcher.styles";
import { Theme, useThemeStore } from "@/lib/contexts/theme";

export const ThemeSwitcher = () => {
  const { setDark, setLight, themeState } = useThemeStore();

  const handleToggle = () => {
    if (themeState === Theme.DARK) return setLight();
    setDark();
  };

  return (
    <ThemeSwitcherContainer>
      <Switch
        type="checkbox"
        onChange={handleToggle}
        data-testid="theme-switcher"
      />
      <Slider className="slider" />
      <MoonIcon themeState={themeState} />
      <SunIcon themeState={themeState} />
    </ThemeSwitcherContainer>
  );
};
