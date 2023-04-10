import { Theme, useThemeStore } from "@/lib/contexts/theme";
import { CloseIcon } from "@/components/Icons/close";
import { CloseIconProps } from "@/components/NavBar/components/CloseIcon/closeIcon.interface";
import { CloseIconContainer } from "@/components/NavBar/components/CloseIcon/closeIcon.styles";
import { themeConstants } from "@/styles/theme.constants";

export const CloseIconComponent = ({ onClick }: CloseIconProps) => {
  const { themeState } = useThemeStore();
  const color = themeState === Theme.DARK ? themeConstants.dark.singleAmburgerBarColor : themeConstants.light.singleAmburgerBarColor;
  return (
    <CloseIconContainer onClick={onClick} data-testid="close-icon">
      <CloseIcon fill={color} />
    </CloseIconContainer>
  );
};
