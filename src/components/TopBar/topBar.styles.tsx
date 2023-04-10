import styled from "styled-components";

export const TopBarContainer = styled.nav`
  position: relative;
  top: 0;
  background-color: transparent;
  width: 100%;
  padding: 0 24px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TopBarCenter = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12.5px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: 38px;
  }
`;

export const MobileRightContainer = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: flex;
  }
`;
