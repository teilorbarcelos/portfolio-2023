import styled from "styled-components";

export const HeaderContainer = styled.nav`
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

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderCenter = styled.div`
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

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: 38px;
    gap: 8px;
  }
`;

export const MobileRightContainer = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: flex;
    gap: 8px;
  }
`;
