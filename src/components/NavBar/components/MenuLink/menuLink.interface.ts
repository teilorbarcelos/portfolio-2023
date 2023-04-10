import { ReactElement } from "react";

export interface MenuLinkProps {
  children: ReactElement;
  title: string;
  path: string;
  testId?: string;
}
