import {
  MoonIcon,
  Slider,
  SunIcon,
  Switch,
  ThemeSwitcherContainer,
} from "./themeSwitcher.styles";
import { Theme, useThemeStore } from "@/lib/contexts/theme";

export function ThemeSwitcher() {
  const { setDark, setLight, theme } = useThemeStore();

  const handleToggle = () => {
    if (theme === Theme.DARK) return setLight();
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
      <MoonIcon theme={theme} />
      <SunIcon theme={theme} />
    </ThemeSwitcherContainer>
  );
}
