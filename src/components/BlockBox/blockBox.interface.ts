import { HTMLAttributes, ReactNode } from "react";

export interface BlockBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  marginTop?: string;
}
