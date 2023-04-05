import { SocialIcon } from "..";
import { Theme, useThemeStore } from "@/lib/contexts/theme";

export const LinkedinIcon = () => {
  const { theme } = useThemeStore();
  const color = theme === Theme.DARK ? "#a5b3ce" : "#4f6591";
  return (
    <SocialIcon
      url="https://www.linkedin.com/in/teilorsb"
      dataTestId="linkedin-link-icon"
    >
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.89211 15H0.808203V5.06894H3.89211V15ZM2.3485 3.71426C1.36236 3.71426 0.5625 2.89746 0.5625 1.91133C0.5625 1.43765 0.750667 0.983377 1.08561 0.648438C1.42055 0.313499 1.87482 0.125332 2.3485 0.125332C2.82217 0.125332 3.27645 0.313499 3.61139 0.648438C3.94633 0.983377 4.13449 1.43765 4.13449 1.91133C4.13449 2.89746 3.3343 3.71426 2.3485 3.71426ZM15.4342 15H12.3569V10.1656C12.3569 9.01348 12.3337 7.53594 10.7535 7.53594C9.15016 7.53594 8.90445 8.78769 8.90445 10.0826V15H5.82387V5.06894H8.7816V6.42363H8.82477C9.23648 5.64336 10.2422 4.81992 11.7427 4.81992C14.8638 4.81992 15.4375 6.8752 15.4375 9.54473V15H15.4342Z"
          fill={color}
        />
      </svg>
    </SocialIcon>
  );
};
