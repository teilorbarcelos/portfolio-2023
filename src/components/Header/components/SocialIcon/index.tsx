import { cloneElement } from "react";
import { SocialIconProps } from "@/components/Header/components/SocialIcon/socialIcon.interface";
import { SocialIconContainer } from "@/components/Header/components/SocialIcon/socialIcon.styles";
import { Theme, useThemeStore } from "@/lib/contexts/theme";
import { themeConstants } from "@/styles/theme.constants";

export const SocialIcon = ({ children, url, dataTestId }: SocialIconProps) => {
  const { themeState } = useThemeStore();
  const color =
    themeState === Theme.DARK
      ? themeConstants.dark.socialIconColor
      : themeConstants.light.socialIconColor;
  return (
    <SocialIconContainer
      target="_blank"
      href={url}
      rel="noreferrer"
      data-testid={dataTestId}
    >
      {cloneElement(children, { fill: color })}
    </SocialIconContainer>
  );
};
