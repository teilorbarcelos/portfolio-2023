import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const BlockTitle = styled.h1`
  font-weight: 900;
  font-size: ${rem(28)};
  line-height: ${rem(34)};
  color: ${(props) => props.theme.titlesColor};
`;
