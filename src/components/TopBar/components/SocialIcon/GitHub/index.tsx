import { GithubIcon } from "@/components/Icons/github";
import { SocialIcon } from "@/components/TopBar/components/SocialIcon";

export const GitHub = () => {
  return (
    <SocialIcon
      url="https://github.com/teilorbarcelos"
      dataTestId="github-link-icon"
    >
      <GithubIcon />
    </SocialIcon>
  );
};
