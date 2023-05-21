import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${rem(24)};
  margin-top: ${rem(26)};
  padding-top: ${rem(24)};
`;
