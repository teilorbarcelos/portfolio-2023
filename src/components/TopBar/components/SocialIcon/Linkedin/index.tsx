import { LinkedinIcon } from "@/components/Icons/linkedin";
import { SocialIcon } from "@/components/TopBar/components/SocialIcon";

export const Linkedin = () => {
  return (
    <SocialIcon
      url="https://www.linkedin.com/in/teilorsb"
      dataTestId="linkedin-link-icon"
    >
      <LinkedinIcon />
    </SocialIcon>
  );
};
