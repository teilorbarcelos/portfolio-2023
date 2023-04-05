import {
  AmburgerButtonContainer,
  SingleAmburgerBar,
} from "./amburgerButton.styles";

export function AmburgerButton() {
  return (
    <AmburgerButtonContainer data-testid="amburger-button">
      <SingleAmburgerBar />
      <SingleAmburgerBar />
      <SingleAmburgerBar />
    </AmburgerButtonContainer>
  );
}
