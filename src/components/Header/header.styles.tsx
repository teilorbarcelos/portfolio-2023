import styled from "styled-components";
import { rem } from "@/hooks/utils";

export const HeaderContainer = styled.nav`
  position: relative;
  top: 0;
  background-color: transparent;
  width: 100%;
  padding: 0 ${rem(24)};
  height: ${rem(60)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(20)};
`;

export const HeaderCenter = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${rem(12.5)};

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: ${rem(38)};
    gap: ${rem(8)};
  }
`;

export const MobileRightContainer = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: flex;
    gap: ${rem(8)};
  }
`;
