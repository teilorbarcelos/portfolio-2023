import { useMenuStore } from "@/lib/contexts/menu";
import { AmburgerButtonContainer } from "@/components/Header/components/AmburgerButton/amburgerButton.styles";

export const AmburgerButton = () => {
  const { isOpen, openMenu, closeMenu } = useMenuStore();
  const toggleOpenMenu = () => {
    if (isOpen) return closeMenu();
    openMenu();
  };
  return (
    <AmburgerButtonContainer
      isMenuOpen={isOpen}
      onClick={toggleOpenMenu}
      data-testid="amburger-button"
    >
      <div className="first-bar" />
      <div className="center-bar" />
      <div className="last-bar" />
    </AmburgerButtonContainer>
  );
};
