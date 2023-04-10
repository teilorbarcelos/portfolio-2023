import { cloneElement } from "react";
import { MenuLinkProps } from "@/components/NavBar/components/MenuLink/menuLink.interface";
import { MenuLinkContainer } from "@/components/NavBar/components/MenuLink/menuLink.styles";
import { Theme, useThemeStore } from "@/lib/contexts/theme";
import { useRouter } from "next/router";
import Link from "next/link";
import { themeConstants } from "@/styles/theme.constants";

export const MenuLink = ({ children, path, title, testId }: MenuLinkProps) => {
  const router = useRouter();
  const { themeState } = useThemeStore();
  const color =
    router.pathname === path
      ? themeConstants.dark.menuLinkActiveColor
      : themeState === Theme.DARK
      ? themeConstants.dark.menuLinkColor
      : themeConstants.light.menuLinkColor;
  return (
    <Link href={path} data-testid={testId}>
      <MenuLinkContainer>
        {cloneElement(children, { fill: color })}
        <p className="title">{title}</p>
      </MenuLinkContainer>
    </Link>
  );
};
