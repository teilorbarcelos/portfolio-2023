import Link from "next/link";
import { Button } from "../Button";
import { BiRightArrowAlt } from "react-icons/bi";
import { BlockRedirectButtonProps } from "./blockRedirectButton.interface";

export const BlockRedirectButton = ({
  text,
  href,
  testId,
}: BlockRedirectButtonProps) => {
  return (
    <Link href={href}>
      <Button type="button" className="button" data-testid={testId}>
        <p>{text}</p> <BiRightArrowAlt />
      </Button>
    </Link>
  );
};
