import { SocialIconProps } from "./socialIcon.interface";
import { SocialIconContainer } from "./socialIcon.styles";

export function SocialIcon({ children, url, dataTestId }: SocialIconProps) {
  return (
    <a target="_blank" href={url} rel="noreferrer" data-testid={dataTestId}>
      <SocialIconContainer>{children}</SocialIconContainer>
    </a>
  );
}
