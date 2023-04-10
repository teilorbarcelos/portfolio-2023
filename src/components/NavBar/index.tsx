import { useMenuStore } from "@/lib/contexts/menu";
import { CloseIconComponent } from "@/components/NavBar/components/CloseIcon";
import { MenuLink } from "@/components/NavBar/components/MenuLink";
import { ProfileIcon } from "@/components/Icons/profile";
import { useTranslation } from "@/hooks/useTranslation";
import { BagIcon } from "@/components/Icons/bag";
import { PenIcon } from "@/components/Icons/pen";
import { ResumeIcon } from "@/components/Icons/resume";
import { NavbarContainer } from "@/components/NavBar/navBar.styles";
import { TalkIcon } from "../Icons/talk";

export const NavBar = () => {
  const t = useTranslation();
  const { isOpen, openMenu, closeMenu } = useMenuStore();
  const toggleOpenMenu = () => {
    if (isOpen) return closeMenu();
    openMenu();
  };
  return (
    <NavbarContainer isOpen={isOpen} data-testid="nav-bar">
      <MenuLink path="/" title={t("about")} testId="about-link">
        <ProfileIcon />
      </MenuLink>

      <MenuLink path="/projects" title={t("projects")} testId="projects-link">
        <BagIcon />
      </MenuLink>

      <MenuLink path="/blog" title={t("blog")} testId="blog-link">
        <PenIcon />
      </MenuLink>

      <MenuLink path="/resume" title={t("resume")} testId="resume-link">
        <ResumeIcon />
      </MenuLink>

      <MenuLink path="/contact" title={t("contact")} testId="contact-link">
        <TalkIcon />
      </MenuLink>

      <CloseIconComponent onClick={toggleOpenMenu} />
    </NavbarContainer>
  );
};
