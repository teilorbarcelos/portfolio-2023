import { useMenuStore } from "@/lib/contexts/menu";
import { AmburgerButtonContainer, CenterBar, FirstBar, LastBar } from "@/components/Header/components/AmburgerButton/amburgerButton.styles";

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
      <FirstBar isMenuOpen={isOpen} />
      <CenterBar isMenuOpen={isOpen} />
      <LastBar isMenuOpen={isOpen} />
    </AmburgerButtonContainer>
  );
};
